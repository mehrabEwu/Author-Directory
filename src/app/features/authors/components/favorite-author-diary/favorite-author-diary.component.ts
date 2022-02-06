import { Component, OnInit } from '@angular/core';
import { TempDataService } from 'src/providers/tempDataService/temp-data.service';
import { Author } from '../author-diary/models/author.model';

@Component({
  selector: 'app-favorite-author-diary',
  templateUrl: './favorite-author-diary.component.html',
  styleUrls: ['./favorite-author-diary.component.css']
})
export class FavoriteAuthorDiaryComponent implements OnInit {
  authorList: Author[];
  fav:Object
  constructor(
    private localStorage:TempDataService
    ) {
      this.fav = this.localStorage.getData("fav-auth") || {}

    }

  ngOnInit(): void {
    const rows = Object.values(this.fav)
    this.authorList= rows?.map(item=>new Author(item))
  }

  childComponetBtnClick(event){
    switch (event?.name) {
      case "remove":
        if(this.fav.hasOwnProperty(event.data._id)){
          delete this.fav[event.data._id]
        }
        this.authorList = this.authorList.filter(item=>item?._id !== event.data._id )
        this.localStorage.setData("fav-auth",this.fav)
        break;
    
      default:
        break;
    }
   
  }
}

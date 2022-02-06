import { Pagination } from './../../../../common/pagination/pagination.model';
import { AuthorsService } from './AuthorService/authors.service';
import { Component, OnInit } from '@angular/core';
import { Author } from './models/author.model';
import { TempDataService } from 'src/providers/tempDataService/temp-data.service';

@Component({
  selector: 'app-author-diary',
  templateUrl: './author-diary.component.html',
  styleUrls: ['./author-diary.component.css'],
})
export class AuthorDiaryComponent implements OnInit {
  authorList: Author[];
  fav:Object;
  paginationData:Pagination;
  sub: any;
  constructor(private AuthorService: AuthorsService,
    private localStorage:TempDataService
    ) {
      this.fav = this.localStorage.getData("fav-auth") || {}
    }

  ngOnInit(): void {

    this.getData(10,3)
  }

ngOnDestroy(): void {
  this.sub.unsubscribe();

}

  childComponetBtnClick(event){
    switch (event?.name) {
      case "add":
        event.data.isFav=true
        this.fav[event.data._id] = event.data
        this.localStorage.setData("fav-auth",this.fav)
        break;
      case "remove":
        if(this.fav.hasOwnProperty(event.data._id)){
          delete this.fav[event.data._id]
        }
        event.data.isFav=false
        this.localStorage.setData("fav-auth",this.fav)
        break;

      default:
        break;
    }

  }
  getData(limit,pageNo){
    const params = {
      limit: limit,
      skip: (pageNo-1)*limit,
    };
   this.sub=this.AuthorService.getAuthorInfo(params).subscribe(
      (resp: any) => {
        this.paginationData = new Pagination(resp);
        this.authorList = resp?.results?.map((item) => {
            if(this.fav && this.fav.hasOwnProperty(item?._id)){
              item["isFav"] = true;
            }
            return new Author(item)
        });

      },
      (errorMessage: string) => {}
    );
  }
  paginationBtnClick(event){
    this.getData(10,event.page.page)
  }
}

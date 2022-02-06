import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/features/authors/components/author-diary/models/author.model';


@Component({
  selector: 'app-author-list-item',
  templateUrl: './author-list-item.component.html',
  styleUrls: ['./author-list-item.component.css']
})
export class AuthorListItemComponent implements OnInit {
  @Input("author") author:Author
  @Output("childBtnClick") childBtnClick:EventEmitter<any> = new EventEmitter
  constructor() { }

  ngOnInit(): void {

  }


  addFavourite(eventName){
    this.childBtnClick.emit({
      data:this.author,
      name:eventName
    })

  }



}

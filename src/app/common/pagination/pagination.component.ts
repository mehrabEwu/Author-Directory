import { Pagination } from './pagination.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input("pages") pages:Pagination
  @Output("paginationBtn") paginationBtn:EventEmitter<any> = new EventEmitter


  constructor() { }


  ngOnInit(): void {
  }



  onClickedPage(action):void {
    switch (action) {
      case 'prev':
      if(this.pages.page >1){
        this.pages.page = this.pages.page - 1
        this.paginationBtn.emit({
          name: action,
          page:this.pages
        })
      }
        break;
      case 'next':
        if(this.pages.page < this.pages.totalPages){
          this.pages.page = this.pages.page +1
          this.paginationBtn.emit({
            name: action,
            page: this.pages
          })
        }
       break;
      default:
        break;
    }

  }

}

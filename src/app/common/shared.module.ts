import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListItemComponent } from './author-list-item/author-list-item.component';
import { WrapPipe } from './pipes/wrap.pipe';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [AuthorListItemComponent,WrapPipe, PaginationComponent, PaginationComponent],
  exports: [AuthorListItemComponent, PaginationComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

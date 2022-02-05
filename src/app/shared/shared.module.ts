import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListItemComponent } from './author-list-item/author-list-item.component';



@NgModule({
  declarations: [AuthorListItemComponent],
  exports: [AuthorListItemComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

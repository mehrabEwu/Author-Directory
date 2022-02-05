import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author.routing.module';
import { AuthorDiaryComponent } from './component/author-diary/author-diary.component';
import { FavoriteAuthorDiaryComponent } from './component/favorite-author-diary/favorite-author-diary.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [AuthorDiaryComponent,FavoriteAuthorDiaryComponent ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule

  ]
})
export class AuthorModule { }

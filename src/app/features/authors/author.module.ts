import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared.module';
import { AuthorRoutingModule } from './author.routing.module';
import { AuthorDiaryComponent } from './components/author-diary/author-diary.component';
import { FavoriteAuthorDiaryComponent } from './components/favorite-author-diary/favorite-author-diary.component';



@NgModule({
  declarations: [AuthorDiaryComponent,FavoriteAuthorDiaryComponent ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule
  ]
})
export class AuthorModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDiaryComponent } from './component/author-diary/author-diary.component';
import { FavoriteAuthorDiaryComponent } from './component/favorite-author-diary/favorite-author-diary.component';



const routes: Routes = [
    { path: '',  redirectTo: 'author', pathMatch: 'full' },
    { path: 'author',  component: AuthorDiaryComponent },
    { path: 'fav-author',  component: FavoriteAuthorDiaryComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthorRoutingModule { }

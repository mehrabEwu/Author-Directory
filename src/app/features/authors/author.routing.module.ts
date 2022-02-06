import { FavoriteAuthorDiaryComponent } from './components/favorite-author-diary/favorite-author-diary.component';
import { AuthorDiaryComponent } from './components/author-diary/author-diary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



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

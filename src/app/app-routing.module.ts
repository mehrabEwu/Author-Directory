import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  //Lazy Load
  {
  path: '',
  loadChildren: () => import('./features/authors/author.module').then(m => m.AuthorModule)
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

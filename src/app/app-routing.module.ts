import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/authors/components/pagenotfound/pagenotfound.component';
const routes: Routes = [

  //Lazy Load
  {
  path: '',
  loadChildren: () => import('./features/authors/author.module').then(m => m.AuthorModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

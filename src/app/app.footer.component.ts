import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component(
  {
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styles: ['.footer-info{margin:.1em 1.8em .1rem 1.1rem;color:#9d0f0f;font-size:7.5pt;font-weight:500;float:right;}']
  } )
export class AppFooterComponent
{
  constructor( public app: AppComponent ) { }
}

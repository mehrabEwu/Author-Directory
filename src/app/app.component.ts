import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Author Directory';
  detailInfo: string = 'Md Mehrab Shahriar, CSE EWU | Date: 06 Feb, 2022';
}

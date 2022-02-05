import { Component, OnInit } from '@angular/core';
import { TempDataService } from 'src/providers/tempDataService/temp-data.service';


@Component({
  selector: 'app-favorite-author-diary',
  templateUrl: './favorite-author-diary.component.html',
  styleUrls: ['./favorite-author-diary.component.css']
})
export class FavoriteAuthorDiaryComponent implements OnInit {
  constructor(
    private localStorage:TempDataService
    ) {}

  ngOnInit(): void {

  }

}

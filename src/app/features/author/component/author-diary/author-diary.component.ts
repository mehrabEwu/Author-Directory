import { AuthorsService } from './AuthorService/authors.service';
import { Component, OnInit } from '@angular/core';
import { TempDataService } from 'src/providers/tempDataService/temp-data.service';

@Component({
  selector: 'app-author-diary',
  templateUrl: './author-diary.component.html',
  styleUrls: ['./author-diary.component.css'],
})
export class AuthorDiaryComponent implements OnInit {

  constructor(private AuthorService: AuthorsService,
    private localStorage:TempDataService
    ) {

    }

  ngOnInit(): void {


  }





}

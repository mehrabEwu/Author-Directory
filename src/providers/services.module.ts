import { NgModule } from '@angular/core';
import { Base } from './base/base';
import { Api } from './api/api';
import { TempDataService } from './tempDataService/temp-data.service';
import { AuthorsService } from 'src/app/features/authors/components/author-diary/AuthorService/authors.service';
@NgModule({
    declarations: [],
    imports: [],
    providers:
        [
            Base,
            Api,
            AuthorsService,
            TempDataService
        ]
})
export class ServicesModule { }

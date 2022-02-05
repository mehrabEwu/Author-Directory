import { NgModule } from '@angular/core';
import { Base } from './base/base';
import { Api } from './api/api';
import { TempDataService } from './tempDataService/temp-data.service';
@NgModule({
    declarations: [],
    imports: [],
    providers:
        [
            Base,
            Api,
            TempDataService
        ]
})
export class ServicesModule { }

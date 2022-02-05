import { Injectable } from '@angular/core';
import { Api } from 'src/providers/api/api';
import { Base } from 'src/providers/base/base';


@Injectable({providedIn:'root'})
export class AuthorsService extends Base {

  constructor(private api: Api) {
    super();
  }

  getAuthorInfo(params: any) {
    return this.api.get('authors', params);
  }



}

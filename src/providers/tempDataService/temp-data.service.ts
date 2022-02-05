import { Injectable } from '@angular/core';
import { Base } from '../base/base';

@Injectable({
  providedIn: 'root'
})
export class TempDataService extends Base {

  constructor() {
    super();
   }

  getData(index: string) {

  }

  setData(index: string, value: any): void {

  }

  deleteData(index: string): void {

  }

  clearStorage(): void {
    localStorage.clear();
  }
}

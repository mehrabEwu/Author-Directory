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
    const data = localStorage.getItem(index)
    return data ? JSON.parse(data) : null
  }

  setData(index: string, value: any): void {
    localStorage.setItem(index,JSON.stringify(value));
  }

  deleteData(index: string): void {
    localStorage.removeItem(index);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}

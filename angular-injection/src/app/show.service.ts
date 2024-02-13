import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private showService: ShowService) { }
  private listItems = [{label: 'first',value: 1},
  {label: 'second',value: 2},
  {label: 'third',value: 3}];

  get items () {
    return this.listItems;
  }
}

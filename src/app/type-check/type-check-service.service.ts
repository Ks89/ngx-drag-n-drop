import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TypeCheckService {
  private dropTypeItem = new Subject<any>();

  constructor() {
  }

  public setDropTypeItem(item) {
    this.dropTypeItem.next(item);
  }

  public getDropTypeItem() {
    return this.dropTypeItem.asObservable();
  }
}

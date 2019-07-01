import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { TypeCheckEnum } from './type-check-enum';

@Injectable()
export class TypeCheckService {
  private dropTypeItem: Subject<TypeCheckEnum> = new Subject<TypeCheckEnum>();

  setDropTypeItem(item: TypeCheckEnum) {
    this.dropTypeItem.next(item);
  }

  getDropTypeItem(): Observable<TypeCheckEnum> {
    return this.dropTypeItem.asObservable();
  }
}

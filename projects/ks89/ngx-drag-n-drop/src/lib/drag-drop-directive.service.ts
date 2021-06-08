import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class DragDropDirectiveService {
  private dropItem: Subject<any> = new Subject<any>();
  private draggedItem: any;

  public setDropItem(item: any): void {
    this.dropItem.next(item);
  }

  public getDropItem(): Observable<any> {
    return this.dropItem.asObservable();
  }

  public setDragItem(item: any): void {
    this.draggedItem = item;
  }

  public getDragItem(): any {
    return this.draggedItem;
  }
}

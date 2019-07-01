import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DragDropDirectiveService {
  private dropItem: Subject<any> = new Subject<any>();
  private draggedItem: any;

  constructor() {
  }

  public setDropItem(item) {
    this.dropItem.next(item);
  }

  public getDropItem() {
    return this.dropItem.asObservable();
  }

  public setDragItem(item) {
    this.draggedItem = item;
  }

  public getDragItem() {
    return this.draggedItem;
  }
}

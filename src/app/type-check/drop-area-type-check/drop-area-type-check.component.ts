import { Component, EventEmitter, Output } from '@angular/core';
import { TypeCheckEnum } from '../type-check-enum';

import { DragTypePayload } from '../../drag-payload';

@Component({
    selector: 'app-drop-area-type-check',
    templateUrl: './drop-area-type-check.component.html',
    styleUrls: ['./drop-area-type-check.component.scss'],
    standalone: false
})
export class DropAreaTypeCheckComponent {
  @Output() droppedItemType: EventEmitter<TypeCheckEnum> = new EventEmitter<TypeCheckEnum>();

  itemsDroppedRound: DragTypePayload[] = [];
  itemsDroppedSquare: DragTypePayload[] = [];
  warningMessage = '';
  highlight: string[] = ['', ''];
  typeCheck = TypeCheckEnum;

  constructor() {
  }

  addDropItem(event: any, type: TypeCheckEnum) {
    if (type === TypeCheckEnum.Square) {
      if (event.type === TypeCheckEnum.Square) {
        this.itemsDroppedSquare.push(event);
        this.droppedItemType.emit(event.type);
        this.warningMessage = '';
      } else {
        this.warningMessage = 'Technically a round shape will fit in a square shap, try to match them';
      }
    }
    if (type === TypeCheckEnum.Round) {
      if (event.type === TypeCheckEnum.Round) {
        this.itemsDroppedRound.push(event);
        this.droppedItemType.emit(event.type);
        this.warningMessage = '';
      } else {
        this.warningMessage = 'A square shape will not fit in a round shape.';
      }
    }
  }

  dragEnter(event: any, type: TypeCheckEnum) {
    if (event.type !== type) {
      this.highlight[type] = 'badHighlight';
    } else {
      this.highlight[type] = 'highlight';
    }
  }

  dragLeave() {
    this.highlight = ['', ''];
  }
}

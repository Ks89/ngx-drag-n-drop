import { Component, EventEmitter, Output } from '@angular/core';
import { TypeCheckEnum } from '../type-check-enum';

@Component({
  selector: 'app-drop-area-type-check',
  templateUrl: './drop-area-type-check.component.html',
  styleUrls: ['./drop-area-type-check.component.css']
})
export class DropAreaTypeCheckComponent {
  @Output()
  droppedItemType: EventEmitter<any> = new EventEmitter();
  itemsDroppedRound: Array<any> = [];
  itemsDroppedSquare: Array<any> = [];
  warningMessage = '';
  highlight: Array<string> = ['', ''];
  typeCheck = TypeCheckEnum;

  constructor() {
  }

  addDropItem(event, type) {
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

  dragEnter(event, type) {
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

import { Component } from '@angular/core';

import { DragPayload } from '../../drag-payload';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent {
  itemsDropped: DragPayload[] = [];

  addDropItem(event: any) {
    this.itemsDropped.push(event);
  }

  alertMouseEvent(event: any) {
    console.log(event);
  }

}

import { Component } from '@angular/core';

import { DragPayload } from '../drag-payload';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  itemsToDrop: DragPayload[] = [
    {
      name: 'Item to drop 1',
      content: 'description 1'
    } as DragPayload,
    {
      name: 'Item to drop 2',
      content: 'description 2'
    } as DragPayload,
    {
      name: 'Item to drop 3',
      content: 'description 3'
    } as DragPayload
  ];

  releaseDrop(event) {
    const index: number = this.itemsToDrop.indexOf(event);
    if (index >= 0) {
      this.itemsToDrop.splice(index, 1);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-type-check',
  templateUrl: './type-check.component.html'
})
export class TypeCheckComponent {
  title = 'Draggable Items that check to see if they are allowed to drop in drop areas';
  dropItemType: any;

  dropItemTypeCheck(event) {
    this.dropItemType = event;
  }
}

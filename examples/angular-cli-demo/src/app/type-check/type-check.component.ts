import { Component } from '@angular/core';

import { TypeCheckEnum } from './type-check-enum';

@Component({
  selector: 'app-type-check',
  templateUrl: './type-check.component.html'
})
export class TypeCheckComponent {
  title = 'Draggable Items that check to see if they are allowed to drop in drop areas';
  dropItemType: TypeCheckEnum;

  dropItemTypeCheck(event: TypeCheckEnum) {
    this.dropItemType = event;
  }
}

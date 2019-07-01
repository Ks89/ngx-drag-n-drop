import { Component, Input } from '@angular/core';
import { TypeCheckEnum } from '../type-check-enum';

@Component({
  selector: 'app-navigation-type-check',
  templateUrl: './navigation-type-check.component.html',
  styleUrls: ['./navigation-type-check.component.scss']
})
export class NavigationTypeCheckComponent {
  @Input()
  dropItemType: any;
  private pegType = TypeCheckEnum;
  itemsToDrop: Array<any> = [
    {
      name: 'Round Peg ',
      content: 'description 1',
      type: TypeCheckEnum.Round
    },
    {
      name: 'Square Peg',
      content: 'description 2',
      type: TypeCheckEnum.Square
    }
  ];

  constructor() {
  }


  releaseDrop(event) {
    const index = this.itemsToDrop.indexOf(event);
    if (index >= 0) {
      setTimeout(() => {
        this.checkType(event, index);
      }, 100);
    }
  }

  private checkType(event, index) {
    if (event.type === this.dropItemType) {
      this.itemsToDrop.splice(index, 1);
    }
  }

  startDrag(item) {
    console.log('Begining to drag item: ' + item);
  }

}

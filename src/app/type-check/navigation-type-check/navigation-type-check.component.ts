import { Component, Input } from '@angular/core';
import { TypeCheckEnum } from '../type-check-enum';
import { DragTypePayload } from '../../drag-payload';

@Component({
    selector: 'app-navigation-type-check',
    templateUrl: './navigation-type-check.component.html',
    styleUrls: ['./navigation-type-check.component.scss'],
    standalone: false
})
export class NavigationTypeCheckComponent {
  @Input() dropItemType: TypeCheckEnum | undefined;

  itemsToDrop: DragTypePayload[] = [
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

  releaseDrop(event: any) {
    const index: number = this.itemsToDrop.indexOf(event);
    if (index >= 0) {
      setTimeout(() => {
        this.checkType(event, index);
      }, 100);
    }
  }

  startDrag(item: any) {
    console.log('Begining to drag item: ' + item);
  }

  private checkType(event: any, index: number) {
    if (event.type === this.dropItemType) {
      this.itemsToDrop.splice(index, 1);
    }
  }
}

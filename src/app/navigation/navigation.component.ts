import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  itemsToDrop: Array<any> = [
    {
      name: 'Item to drop 1',
      content: 'desctiption 1'
    },
    {
      name: 'Item to drop 2',
      content: 'desctiption 2'
    },
    {
      name: 'Item to drop 3',
      content: 'desctiption 3'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  releaseDrop(event) {
    const index = this.itemsToDrop.indexOf(event);
    if (index >= 0) {
      this.itemsToDrop.splice(index, 1);
    }
  }

}

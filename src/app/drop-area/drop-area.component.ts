import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css']
})
export class DropAreaComponent implements OnInit {
  itemsDropped: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
  }

  addDropItem(event) {
    this.itemsDropped.push(event);
  }

  alertMouseEvent(event) {
    // debugger;
    console.log(event);
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-box',
  templateUrl: './generic-box.component.html',
  styleUrls: ['./generic-box.component.css']
})
export class GenericBoxComponent implements OnInit {
  @Input()
  genericBox: any;

  constructor() {
  }

  ngOnInit() {
    if (!this.genericBox) {
      this.genericBox = {name: 'Generic Box 1', content: 'Generic Box 1 Content'};
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { DragPayload } from '../../drag-payload';

@Component({
  selector: 'app-generic-box',
  templateUrl: './generic-box.component.html'
})
export class GenericBoxComponent implements OnInit {
  @Input() genericBox: DragPayload;

  ngOnInit() {
    if (!this.genericBox) {
      this.genericBox = {
        name: 'Generic Box 1',
        content: 'Generic Box 1 Content'
      };
    }
  }
}

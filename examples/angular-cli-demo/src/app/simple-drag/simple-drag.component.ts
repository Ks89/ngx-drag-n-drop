import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-drag',
  template: `
    <div class="row">
      <h2>Very Basic</h2>
      <div class="col-md-4">
        <h3>Box from which to drag</h3>
        <app-navigation></app-navigation>
      </div>
      <div class="col-md-8">
        <h3>Box to drag things into</h3>
        <app-drop-area></app-drop-area>
      </div>
    </div>
  `
})
export class SimpleDragComponent {
  title = 'Simple Draggable Boxes for Angular';
}

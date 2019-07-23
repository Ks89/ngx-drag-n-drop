import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-into-input',
  templateUrl: './drag-into-input.component.html',
  styleUrls: ['./drag-into-input.component.scss']
})
export class DragIntoInputComponent {
  draggedContent = '';

  addDropItem(draggedContent: string) {
    console.log('draggedContent', draggedContent);
    this.draggedContent = draggedContent;
  }
}

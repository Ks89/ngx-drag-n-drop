import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DragDropDirectiveService } from './drag-drop-directive.service';

@Directive({
  selector: '[dropDirective]'
})
export class DropDirective {
  @Input()
  dropHighlight: string;
  @Output()
  dropEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  dragenterEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  dragleaveEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  dropEventMouse: EventEmitter<any> = new EventEmitter();

  private highlighted = false;
  private dragItem: any;

  constructor(
    private el: ElementRef,
    private dragDropDirectiveService: DragDropDirectiveService
  ) {
  }

  @HostListener('dragenter') onDragEnter() {
    this.dragItem = this.dragDropDirectiveService.getDragItem();
    this.dragenterEvent.emit(this.dragItem);
    // this.highlighted = true;
    this.highlight();
  }

  @HostListener('dragleave') onDragLeave() {
    this.dragItem = this.dragDropDirectiveService.getDragItem();
    this.dragleaveEvent.emit(this.dragItem);
    // this.highlighted = false;
    this.highlight();
  }

  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    // check to see if we are getting what was sent. text/plain
    const eventData: any = event.dataTransfer.getData('text');
    if (eventData && event.dataTransfer.files.length === 0) {
      event.preventDefault();
      // since html draggable will not tranfser an object, we need to parse are string
      const transferredObjectString: any = JSON.parse(eventData);
      const transferredObjectID: any = transferredObjectString.id;
      const transferredObject: any = transferredObjectString.object;
      this.dropEvent.emit(transferredObject);
      this.dragDropDirectiveService.setDropItem(transferredObjectID);

    }
    this.dropEventMouse.emit(event);
    this.highlight();
  }

  private highlight() {
    if (this.dropHighlight) {
      if (!this.highlighted) {
        this.el.nativeElement.classList.add(this.dropHighlight);
      } else {
        this.el.nativeElement.classList.remove(this.dropHighlight);
      }
    }
    this.highlighted = !this.highlighted;
  }

}

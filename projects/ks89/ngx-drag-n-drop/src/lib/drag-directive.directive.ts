import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { DragDropDirectiveService } from './drag-drop-directive.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ksDragDirective]'
})
export class DragDirective implements OnDestroy {
  @Input() dragDirective: any; // draggedItem
  @Input() dragHighlight: string; // cssHighlight
  @Output() releaseDrop: EventEmitter<any> = new EventEmitter();
  @Output() startDrag: EventEmitter<any> = new EventEmitter();

  private highlighted = false;
  private dropSubscription: Subscription;

  constructor(
    private el: ElementRef,
    private dragDropDirectiveService: DragDropDirectiveService
  ) {
    this.el.nativeElement.draggable = 'true';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave') onMouseOut() {
    this.highlight();
  }

  @HostListener('dragstart', ['$event']) onDragStart(event: any) {
    // html draggable will not transfer an object, so we stringify it
    const transferObject = {object: this.dragDirective, id: 'dragDirectiveID-' + new Date().getTime()};
    const transferObjectString = JSON.stringify(transferObject);
    event.dataTransfer.setData('text', transferObjectString);
    this.dragDropDirectiveService.setDragItem(this.dragDirective);
    this.dropSubscription = this.dragDropDirectiveService.getDropItem().subscribe(
      item => {
        this.emitDraggedItem(this.dragDirective);
      }
    );
    this.startDrag.emit(this.dragDirective);
  }

  @HostListener('dragend') onDragEnd() {
    if (typeof this.dropSubscription !== 'undefined') {
      this.dropSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    if (typeof this.dropSubscription !== 'undefined') {
      this.dropSubscription.unsubscribe();
    }
  }

  private emitDraggedItem(item) {
    this.releaseDrop.emit(item);
    this.dropSubscription.unsubscribe();
  }

  private highlight() {
    if (this.dragHighlight) {
      if (!this.highlighted) {
        this.el.nativeElement.classList.add(this.dragHighlight);
      } else {
        this.el.nativeElement.classList.remove(this.dragHighlight);
      }
    }
    this.highlighted = !this.highlighted;
  }
}

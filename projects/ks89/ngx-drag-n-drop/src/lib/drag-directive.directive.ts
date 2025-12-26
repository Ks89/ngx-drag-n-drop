import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
import { DragDropDirectiveService } from './drag-drop-directive.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[ksDragDirective]',
    standalone: false
})
export class DragDirective implements OnDestroy {
  @Input() draggedItem: any;
  @Input() dragHighlight: string | undefined; // cssHighlight
  @Output() releaseDrop: EventEmitter<any> = new EventEmitter();
  @Output() startDrag: EventEmitter<any> = new EventEmitter();

  private highlighted = false;
  private dropSubscription: Subscription | undefined;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private dragDropDirectiveService: DragDropDirectiveService
  ) {
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave') onMouseOut() {
    this.highlight();
  }

  @HostListener('dragstart', ['$event']) onDragStart(event: any) {
    // html draggable will not transfer an object, so we stringify it
    const transferObject = {object: this.draggedItem, id: 'dragDirectiveID-' + new Date().getTime()};
    const transferObjectString = JSON.stringify(transferObject);
    event.dataTransfer.setData('text', transferObjectString);
    this.dragDropDirectiveService.setDragItem(this.draggedItem);
    this.dropSubscription = this.dragDropDirectiveService.getDropItem().subscribe(
      item => {
        this.emitDraggedItem(this.draggedItem);
      }
    );
    this.startDrag.emit(this.draggedItem);
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

  private emitDraggedItem(item: any) {
    this.releaseDrop.emit(item);
    if (this.dropSubscription) {
      this.dropSubscription.unsubscribe();
    }
  }

  private highlight() {
    if (this.dragHighlight) {
      if (!this.highlighted) {
        this.renderer.addClass(this.el.nativeElement, this.dragHighlight);
      } else {
        this.renderer.removeClass(this.el.nativeElement, this.dragHighlight);
      }
    }
    this.highlighted = !this.highlighted;
  }
}

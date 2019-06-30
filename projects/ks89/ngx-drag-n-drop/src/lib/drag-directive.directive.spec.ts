import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DragDirective } from './drag-directive.directive';
import { DragDropDirectiveService } from './drag-drop-directive.service';
import { Subject } from 'rxjs';

// test component to test highlighting
@Component({
  template: `
      <div id="itemDiv" [dragDirective]='item' [dragHighlight]="'highlight'" (releaseDrop)="testEvent($event)"
           (startDrag)="testEvent($event)">
          <span id="itemName">{{item.name}}</span>
          <p>{{testMsg}}</p>
      </div>`
})
class TestComponent {
  public item: any = {name: 'test name'};
  public testMsg: any;

  public testEvent(event): void {
    console.log(event);
    this.testMsg = event;
  }
}

// fakeDatatransfer for html5 dragEvent

// fakeEvent to pretend its an html5 dragEvent
class FakeEvent {
  public customObject;
  public customID;
  public dataTransfer: object = {
    setData: (var1, var2) => {
      Object.defineProperty(this, var1, {value: var2});
      console.log('inside fake event set data');
    }
  };
}

describe('DragDirective', () => {
  const fakeEvent: FakeEvent = new FakeEvent();
  let fixture: ComponentFixture<TestComponent>;
  let itemDiv: DebugElement;
  let comp: TestComponent;
  let directInstance: DragDirective;
  let dragService: DragDropDirectiveService;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [DragDropDirectiveService],
      declarations: [DragDirective, TestComponent]
    }).createComponent(TestComponent);
    comp = fixture.componentInstance;
    itemDiv = fixture.debugElement.query(By.directive(DragDirective));
    directInstance = itemDiv.injector.get(DragDirective);
    // dragService = directInstance.dragDropDirectiveService;
    dragService = TestBed.get(DragDropDirectiveService);
    fixture.detectChanges();
    comp.testMsg = '';
    spyOn(dragService, 'setDragItem');
  });

  it('should have a css class of "highlight" on mouseenter', fakeAsync(() => {
    itemDiv.triggerEventHandler('mouseenter', null);
    tick();
    expect(itemDiv.nativeElement.classList).toContain('highlight');
  }));

  it('should not have a css class of "highlight" on mouseout', fakeAsync(() => {
    itemDiv.triggerEventHandler('mouseout', null);
    tick();
    expect(itemDiv.nativeElement.classList).not.toContain('highlight');
  }));

  it('should emit item when drag start calls onDragStart', fakeAsync(() => {
    directInstance.onDragStart(fakeEvent);
    tick();
    expect(comp.testMsg).toEqual(comp.item);
    expect(dragService.setDragItem).toHaveBeenCalledWith(comp.item);
  }));
  it('should call dragdropservice and update event with unique id and object', fakeAsync(() => {
    const dropItem = new Subject<any>();
    dropItem.next(comp.item);
    spyOn(dragService, 'getDropItem').and.returnValue(dropItem.asObservable());
    directInstance.onDragStart(fakeEvent);
    tick();
    expect(dragService.setDragItem).toHaveBeenCalledWith(comp.item);
    expect(fakeEvent.customObject).toBe(JSON.stringify(comp.item));
    // tslint:disable-next-line:no-unused-expression
    expect(fakeEvent.customID).toBeTruthy;
    expect(comp.testMsg).toEqual(comp.item);
  }));
});

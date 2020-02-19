import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropDirective } from './drop-directive.directive';
import { DragDropDirectiveService } from './drag-drop-directive.service';

// test component to test highlighting
@Component({
  template: `
      <div ksDropDirective (dropEvent)="testEvent($event)" (dragenterEvent)="testEvent($event)" (dragenterEvent)="testEvent($event)"
           class="droppable" [dropHighlight]="'highlight'">
          <span>{{item.name}}</span>
          <p>{{testMsg}}</p>
      </div>
  `

})
class TestComponent {
  public item: any = {name: 'test name'};
  public testMsg: any;

  public testEvent(event): void {
    console.log(event);
    this.testMsg = event;
    // debugger;
  }
}

// fakeDatatransfer for html5 dragEvent

// fakeEvent to pretend its an html5 dragEvent
class FakeEvent {
  // public dataName;
  // public dataObject;
  public dataTransfer: any = {
    setData: (var1, var2) => {
      Object.defineProperty(this, var1, {value: var2});
      console.log('inside fake event set data');
    },
    getData: (var1) => {
      return this[var1];
    }
  };
}

describe('DropDirective', () => {
  const fakeEvent: FakeEvent = new FakeEvent();
  let fixture: ComponentFixture<TestComponent>;
  let itemDiv: DebugElement;
  let comp: TestComponent;
  let directInstance: DropDirective;
  let dragService: DragDropDirectiveService;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [DragDropDirectiveService],
      declarations: [DropDirective, TestComponent]
    }).createComponent(TestComponent);
    comp = fixture.componentInstance;
    itemDiv = fixture.debugElement.query(By.directive(DropDirective));
    directInstance = itemDiv.injector.get(DropDirective);
    dragService = TestBed.inject(DragDropDirectiveService);
    comp.testMsg = '';
    fixture.detectChanges();
    spyOn(dragService, 'getDragItem').and.returnValue(comp.item);
  });

  describe('dragenter behavior', () => {
    it('should have a css class of "highlight" on dragenter', fakeAsync(() => {
      itemDiv.triggerEventHandler('dragenter', null);
      tick();
      expect(itemDiv.nativeElement.classList).toContain('highlight');
    }));
    it('should call drag service getDragItem and emit item as dragenterEvent', fakeAsync(() => {
      itemDiv.triggerEventHandler('dragenter', null);
      tick();
      expect(dragService.getDragItem).toHaveBeenCalled();
      expect(comp.testMsg).toEqual(comp.item);
    }));
  });

  describe('dragleave behavior', () => {
    it('should not have a css class of "highlight" on dragleave', fakeAsync(() => {
      itemDiv.triggerEventHandler('dragenter', null);
      tick();
      itemDiv.triggerEventHandler('dragleave', null);
      tick();
      expect(itemDiv.nativeElement.classList).not.toContain('highlight');
    }));
    it('should call drag service getDragItem and emit item as dragleaveEvent', fakeAsync(() => {
      itemDiv.triggerEventHandler('dragenter', null);
      tick();
      expect(dragService.getDragItem).toHaveBeenCalled();
      expect(comp.testMsg).toEqual(comp.item);
    }));
  });

  describe('drop behavior', () => {
    it('should emit item on drop', fakeAsync(() => {
      fakeEvent.dataTransfer.setData('customObject', JSON.stringify(comp.item));
      directInstance.onDrop(fakeEvent);
      tick();
      expect(comp.testMsg).toEqual(comp.item);
    }));
    it('should call dragService setDropItem with id', fakeAsync(() => {
      spyOn(dragService, 'setDropItem');
      const ID = '1234';
      fakeEvent.dataTransfer.setData('customID', ID);
      directInstance.onDrop(fakeEvent);
      tick();
      expect(dragService.setDropItem).toHaveBeenCalledWith(ID);
    }));
  });
});

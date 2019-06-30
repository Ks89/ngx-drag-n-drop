import { async, inject, TestBed } from '@angular/core/testing';

import { DragDropDirectiveService } from './drag-drop-directive.service';

describe('DragDropDirectiveService without testbed', () => {
  let service: DragDropDirectiveService;
  beforeEach(() => {
    service = new DragDropDirectiveService();
  });

  it('should set an item and return it as an observable (async)', async(() => {
    const item = {name: 'test item'};
    service.setDropItem(item);
    service.getDropItem().subscribe(value => {
      expect(value.name).toBe(item.name);
    });
  }));
});

describe('DragDropDirectiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragDropDirectiveService]
    });
  });

  it('should be created', inject([DragDropDirectiveService], (service: DragDropDirectiveService) => {
    expect(service).toBeTruthy();
  }));
});

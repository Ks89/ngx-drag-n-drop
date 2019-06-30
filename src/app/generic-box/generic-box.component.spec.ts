import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBoxComponent } from './generic-box.component';

describe('GenericBoxComponent', () => {
  let component: GenericBoxComponent;
  let fixture: ComponentFixture<GenericBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenericBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

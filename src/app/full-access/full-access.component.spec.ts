import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAccessComponent } from './full-access.component';

describe('FullAccessComponent', () => {
  let component: FullAccessComponent;
  let fixture: ComponentFixture<FullAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

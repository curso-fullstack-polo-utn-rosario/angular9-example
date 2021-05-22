import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherVideoComponent } from './another-video.component';

describe('AnotherVideoComponent', () => {
  let component: AnotherVideoComponent;
  let fixture: ComponentFixture<AnotherVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

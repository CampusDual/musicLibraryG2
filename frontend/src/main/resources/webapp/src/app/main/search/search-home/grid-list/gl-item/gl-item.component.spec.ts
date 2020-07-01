import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlItemComponent } from './gl-item.component';

describe('GlItemComponent', () => {
  let component: GlItemComponent;
  let fixture: ComponentFixture<GlItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

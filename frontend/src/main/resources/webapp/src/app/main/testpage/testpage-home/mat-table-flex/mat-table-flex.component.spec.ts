import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableFlexComponent } from './mat-table-flex.component';

describe('MatTableFlexComponent', () => {
  let component: MatTableFlexComponent;
  let fixture: ComponentFixture<MatTableFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

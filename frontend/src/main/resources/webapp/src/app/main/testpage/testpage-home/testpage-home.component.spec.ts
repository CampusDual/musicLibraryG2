import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpageHomeComponent } from './testpage-home.component';

describe('TestpageHomeComponent', () => {
  let component: TestpageHomeComponent;
  let fixture: ComponentFixture<TestpageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

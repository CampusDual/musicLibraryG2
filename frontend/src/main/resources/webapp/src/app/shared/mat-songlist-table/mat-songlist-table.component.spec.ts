import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSonglistTableComponent } from './mat-songlist-table.component';

describe('MatSonglistTableComponent', () => {
  let component: MatSonglistTableComponent;
  let fixture: ComponentFixture<MatSonglistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSonglistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSonglistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

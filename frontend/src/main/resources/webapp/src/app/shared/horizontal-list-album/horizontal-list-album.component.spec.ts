import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListAlbumComponent } from './horizontal-list-album.component';

describe('HorizontalListAlbumComponent', () => {
  let component: HorizontalListAlbumComponent;
  let fixture: ComponentFixture<HorizontalListAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

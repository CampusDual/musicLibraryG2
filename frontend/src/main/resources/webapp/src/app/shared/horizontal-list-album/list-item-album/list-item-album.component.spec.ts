import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAlbumComponent } from './list-item-album.component';

describe('ListItemAlbumComponent', () => {
  let component: ListItemAlbumComponent;
  let fixture: ComponentFixture<ListItemAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

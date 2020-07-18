import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlbumComponent } from '../album/album.component';
import { AlbumService } from '../album/service/album.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  value: string;
  listaAlbums = AlbumService.name
  constructor() { }

  
  /*logChanges(){
    console.log("Search bar value updated: "+this.value);
  }*/


  search(){

    //Aqui va el codigo de la busqueda
    if (this.value.length>3) {
      filtro = this.value;

    } else console.log("No busqueda");
    
  }
  ngOnInit() {
    
  }

 
  
}

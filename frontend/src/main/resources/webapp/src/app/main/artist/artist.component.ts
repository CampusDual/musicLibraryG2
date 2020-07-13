import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: artist;
  albumsDataSource: HlItem[] = [];
  constructor() { }
  

  ngOnInit() {
    let linkinPark: artist = {
      name: "Linkin Park", 
      artist_id: 1,
      description: "Linkin Park are one of the most popular bands of the so called \"nü-metal\" movement, along with Limp Bizkit, Korn and several others. Their sound is a wide range of influences, including metal, alternate rock, hip-hop, electronica and industrial. Linkin Park's debut album \"[Hybrid Theory]\" was a multi-platinum smash worldwide, selling over 13 million copies, 8 million of them in the US alone. Reanimation is the correspondent remix album\.\n\n Originally named Xero (5), the band changed its name to Hybrid Theory (2). However, this name caused a legal dispute when Hybrid, a popular House music group, threatened to sue Hybrid Theory if the name was not changed. Searching for a new name, Chester Bennington was driving along when he saw a street sign for the park named \"Lincoln Park\" in Los Angeles. Originally, the band members wanted to use the name \"Lincoln Park\", however they changed it to \"Linkin\" to acquire the internet domain \"linkinpark.com\"\.\n\n Frontman Chester Bennington committed suicide on July 20, 2017."
    }
    this.artist = linkinPark;
    let meteora: HlItem = {id: 1, itemType: "album", row1: "Meteora", row2: "2000"};
    let hybridTheory: HlItem =  {id: 2, itemType: "album", row1: "[Hybrid Theory]", row2: "2003"};
    let minutesToMidnight: HlItem = {id: 3, itemType: "album", row1: "Minutes to Midnight", row2: "2007"};
    let aThousandSuns: HlItem = {id: 4, itemType: "album", row1: "A Thousand Suns", row2: "2010"};
    this.albumsDataSource.push(meteora,hybridTheory,minutesToMidnight,aThousandSuns);
  }

}

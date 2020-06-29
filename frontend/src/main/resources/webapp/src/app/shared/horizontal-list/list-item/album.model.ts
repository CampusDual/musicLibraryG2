interface Album {
    id: number;
    title: string;
    artist: string;
    creationYear: number; 
    songList: song[];
}

interface song {
    track: number;
    title: string; 
    duration: number;
}



let album: Album; 
   

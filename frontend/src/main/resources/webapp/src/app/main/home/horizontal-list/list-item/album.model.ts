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

interface Artist {
    id: number;
    itemType: string;
    name: string;
    bio: string;
}


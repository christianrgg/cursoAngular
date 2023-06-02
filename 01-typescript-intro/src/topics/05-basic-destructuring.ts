interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

//Con control [+ .] añade las propiedades faltantes
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

// const {} = audioPlayer;


const song = `New Song`;


//Para desestructurar un objeto dentro de otro objeto
const {song:anotherSong, songDuration:duration, details} = audioPlayer;
const {author} = details;


console.log("Song:", anotherSong);
console.log("Duration:", duration);
console.log("Author:", author);

export{}
class Song {
  constructor(title, artist, album) {
    this.title = title;
    this.artist = artist;
    this.album = album;
  }
}

class Musician {
  constructor(name, instrument, genre) {
    this.name = name;
    this.instrument = instrument;
    this.genre = genre;
  }
}

class Playlist {
  constructor(name, song1, song2, song3) {
    this.name = name;
    this.song1 = song1;
    this.song2 = song2;
    this.song3 = song3;
  }
  getInfo() {
    console.log(`The playlist '${this.name}' has the following songs:`);
    console.log(`${this.song1.title} by ${this.song1.artist},`);
    console.log(`${this.song2.title} by ${this.song2.artist},`);
    console.log(`${this.song3.title} by ${this.song3.artist},`);
    console.log(`${this.song4.title} by ${this.song4.artist}.`);
  }
}

const musician1 = new Musician("Parannoul", "Guitar", "Shoegaze");

const musician2 = new Musician("Krovie", "Computer", "Electronic");

const musician3 = new Musician("Colin Smith", "Piano", "Electronic");

const song1 = new Song("Solaris", musician1.name, "After the Magic");

const song2 = new Song("Broadcast", musician2.name, "Pretend God Exists");

const song3 = new Song("Reverie", musician3.name, "Moon Jumper");

const myPlaylist = new Playlist("My Favorite Tracks", song1, song2, song3);

myPlaylist.getInfo();

//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;

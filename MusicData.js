//In this file you will declare three classes (object templates)
class Song {
  constructor(title, artist, album) {
    this.title = title;
    this.artist = artist;
    this.album = album;
  }
}

//1. Declare a class called Song, it's constructor should take three parameters: title, artist, album

//2. Declare a class called Musician, it's constructor should take three parameters: name, instrument, genre
class Musician {
  constructor(name, instrument, genre) {
    this.name = name;
    this.instrument = instrument;
    this.genre = genre;
  }
}

//3. Declare a class called Playlist, it's constructor should take four parameters: name, song1, song2, song3, song4
//4. this class should also define a method called getInfo() that prints text to the console saying
//  The playlist (whatever name you gave it) has the following songs:
//         (Song1 name) by (Song1 Artist Name),
//         (Song2 name) by (Song2 Artist Name),
//         (Song3 name) by (Song3 Artist Name),

class Playlist {
  constructor(name, song1, song2, song3, song4) {
    this.name = name;
    this.song1 = song1;
    this.song2 = song2;
    this.song3 = song3;
    this.song4 = song4;
  }
  getInfo() {
    console.log(`The playlist '${this.name}' has the following songs:`);
    console.log(`${this.song1.title} by ${this.song1.artist},`);
    console.log(`${this.song2.title} by ${this.song2.artist},`);
    console.log(`${this.song3.title} by ${this.song3.artist},`);
    console.log(`${this.song4.title} by ${this.song4.artist}.`);
  }
}

//5. export all three classes to make them available to the other JS files.

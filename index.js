class Entity {
  constructor(id) {
    this.id = id;
  }
}

class Artist extends Entity {
  constructor (id) {
    super(id);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    if (typeof name !== 'string' || name === null || name === '') throw new Error ('invalid artist name');
      this.name = name;
      return this;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender) {
    if (typeof gender !== 'number' || gender === null || gender === '') throw new Error ('invalid gender');
      this.gender = gender;
      return this;
  }

  getBand() {
    return this.band;
  }

  setBand(band) {
    if (typeof band !== 'boolean' || band === null || band === '') throw new Error ('invalid band');
    this.band = band;
    return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    this.bio = bio;
    return this;
  }

  isValid() {
    return typeof this.name !== 'undefined';
  }

}

class Song extends Entity { //наследование свойств из родительского класса
  constructor (id) {
    super(id); //вызов свойства из родительского конструктора
  }

  getName() { //чтение значения name
    return this.name;
  }

  setName(name) { //записывает новое значение name
    if (typeof name !== 'string' || name === null || name === '') throw new Error ('invalid song name');
      this.name = name;
      return this;
  }

  isValid() {
    return typeof this.name !== 'undefined';
  }

  getAlbum() {
    for (let [key, value] of albums.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setAlbum(album) {
    if (album instanceof Album) {
      this.albumID = album.id;
    } else if (typeof album === 'number') {
      this.albumID = album;
    } else {
      throw new Error ("invalid album object");
    }
    return this;
  }

  getArtist() {
    for (let [key, value] of artists.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setArtist(artist) {
    if (artist instanceof Artist) {
      this.artistID = artist.id;
    } else if (typeof artist === 'number') {
      this.artistID = artist;
    } else {
      throw new Error ("invalid artist object")
    }
    return this;
  }

  getGenre() {
    for (let [ket, value] of genres.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setGenre(genre) {
    if (genre instanceof Genre) {
      this.genreID = genre.id;
    } else if (typeof genre === 'number') {
      this.genreID = genre;
    } else {
      throw new Error ("invalid genre object");
    }
    return this;
  }

  isValid() {
    return typeof this.genre !== 'undefined';
  }

}

class Album extends Entity { //наследование свойств из родительского класса
  constructor (id) {
    super(id); //вызов свойства из родительского конструктора
  }

  getAlbum() { //чтение значения album
    return this.album;
  }

  setAlbum(album) { //записывает новое значение album
    if (typeof album !== 'number' || album === null || album < 0) throw new Error ("invalid album ID");
      this.album = album;
      return this;
  }

  getReleased() {
    return this.realeased;
  }

  setReleased(released) {
    if (typeof released !== 'number' || released === null || released === '') throw new Error ("invalid realeased date");
      this.released = released;
      return this;
  }

  isValid() {
    return typeof this.album !== 'undefined';
  }

  getLabel() {
    for (let [key, value] of labels.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setLabel(label) {
    if (label instanceof Label) {
      this.labelID = label.id;
    } else if (typeof label === 'string') {
      this.labelID = label;
    } else {
      throw new Error ("invalid label object")
    }
    return this;
  }

  getArtist() {
    for (let [key, value] of artists.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setArtist(artist) {
    if (artist instanceof Artist) {
      this.artistID = artist.id;
    } else if (typeof artist === 'number') {
      this.artistID = artist;
    } else {
      throw new Error ("invalid artist object")
    }
    return this;
  }

  getGenre() {
    for (let [ket, value] of genres.map) {
      if (value.id === this.id) {
        return value;
      }
    }
  }

  setGenre(genre) {
    if (genre instanceof Genre) {
      this.genreID = genre.id;
    } else if (typeof genre === 'number') {
      this.genreID = genre;
    } else {
      throw new Error ("invalid genre object");
    }
    return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    this.bio = bio;
    return this;
  }

  getCover() {
    return this.cover;
  }

  setCover(cover) {
    if (typeof cover !== 'boolean' || cover === null || cover === '') throw new Error ('invalid cover');
    this.cover = cover;
    return this;
  }

  isValid() {
    return typeof this.album !== 'undefined';
  }

}

class Genre extends Entity {
  constructor (id) {
    super(id);
  }

  getGenre() {
    return this.genre;
  }

  setGenre(genre) {
    if (typeof genre !== 'string' || genre === null || genre === '') throw new Error ("invalid genre");
      this.genre = genre;
      return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    this.bio = bio;
    return this;
  }

  isValid() {
    return typeof this.genre !== 'undefined';
  }

}

class Label extends Entity {
  constructor (id) {
    super(id);
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    if (typeof label !== 'string' || label === null || label === '') throw new Error ("ivalid label name");
      this.label = label;
      return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    this.bio = bio;
    return this;
  }

  isValid() {
    return typeof this.album !== 'undefined';
  }
}

class Entities {
  constructor() {
    this.map = new Map();
    this.iterator = -1;
  }

  generateID() {
    return ++this.iterator;
  }

  new() {
    return new Entity(this.generateID());
  }

  set(entity) {
    if (typeof entity.id === 'undefined') throw new Error ("invalid entity", entity);
    this.map.set(entity.id, entity);
    return this;
  }

  get(id) {
    return this.map.get(id);
  }

  delete(entity) {
    this.map.delete(entity.id)
  }

}

class Artists extends Entities {

  new () {
    return new Artist(this.generateID());
  }

}

class Songs extends Entities {

  new() {
    return new Song(this.generateID());
  }

}

class Albums extends Entities {

  new() {
    return new Album(this.generateID());
  }

}

class Genres extends Entities {

  new() {
    return new Genre(this.generateID());
  }

}

class Labels extends Entities {

  new() {
    return new Label(this.generateID());
  }

}

const albums = new Albums();
const songs = new Songs();
const labels = new Labels();
const artists = new Artists();
const genres = new Genres();

const album = albums.new()
                    .setAlbum(0)
                    .setReleased(2020)
                    .setBio('Some random text for example')
                    .setCover(true);

const song = songs.new()
                  .setName('Toosie Slide');

const label = labels.new()
                   .setLabel('Republic')
                   .setBio('Some random text for example');

const artist = artists.new()
                      .setName('Drake')
                      .setGender(1)
                      .setBand(false)
                      .setBio('Canadian rapper, singer, songwriter, executive producer, actor, and entrepreneur');

const genre = genres.new()
                    .setGenre('Rap')
                    .setBio('Some random text for example');

albums.set(album);
songs.set(song);
labels.set(label);
artists.set(artist);
genres.set(genre);

song.setAlbum(album)
    .setArtist(artist)
    .setGenre(genre);
    
album.setLabel(label)
     .setArtist(artist)
     .setGenre(genre);

console.log(song);
console.log(album);
console.log(artist);
console.log(label);
console.log(genre);

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
    if (typeof gender !== 'number' && isNaN(gender)) throw new Error ('invalid gender');
      this.gender = gender;
      return this;
  }

  isBand() {
    return this.band;
  }

  setBand(band) {
    if (typeof band !== 'boolean') throw new Error ('invalid band');
      this.band = band;
      return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    if (bio.length > 256) throw new Error ('bio is too long');
      this.bio = bio;
      return this;
  }

  isValid() {
    return typeof this.name !== 'undefined' &&
    typeof this.gender !== 'undefined' &&
    typeof this.band !== 'undefined' &&
    typeof this.bio !== 'undefined';
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

  getAlbum() {
    return albums.map.get(this.id);
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
    return artists.map.get(this.id);
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
    return genres.map.get(this.id);
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

  getDuration() {
    return this.duration;
  }

  setDuration(duration) {
    if (typeof duration !== 'number' && isNaN(duration)) throw new Error ('invalid duration');
      this.duration = duration;
      return this;
  }

  getReleased() {
    return this.realeased;
  }

  setReleased(released) {
    if (typeof released !== 'number' && isNaN(released)) throw new Error ("invalid realeased date");
      this.released = new Date(released).toDateString();
      return this;
  }

  getText() {
    return this.text;
  }

  setText(text) {
    if (typeof text !== 'string' || text === null || text === '') throw new Error ('invalid text');
      this.text = text;
      return this;
  }

  getBPM() {
    return this.bpm;
  }

  setBPM(bpm) {
    if (typeof bpm !== 'number' && isNaN(bpm)) throw new Error ("invalid bpm");
      if (bpm < 0 || bpm > 500) throw new Error ("invalid length of bpm");
      this.bpm = bpm;
      return this;
  }

  isExplicit() {
    return this.explicit;
  }

  setExplicit(explicit) {
    if (typeof explicit !== 'boolean') throw new Error ('invalid explicit');
    this.explicit = explicit;
    return this;
  }

  getFileID() {
    return this.fileID;
  }

  setFileID(fileID) {
    if (typeof fileID !== 'number' && isNaN(fileID)) throw new Error ('invalid file ID');
      this.fileID = fileID;
      return this;
  }

  isValid() {
    return typeof this.name !== 'undefined' &&
    typeof this.albumID !== 'undefined' &&
    typeof this.artistID !== 'undefined' &&
    typeof this.genreID !== 'undefined' &&
    typeof this.duration !== 'undefined' &&
    typeof this.released !== 'undefined' &&
    typeof this.text !== 'undefined' &&
    typeof this.bpm !== 'undefined' &&
    typeof this.explicit !== 'undefined' &&
    typeof this.fileID !== 'undefined';
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
    if (typeof album !== 'number' && isNaN(album) && album < 0) throw new Error ("invalid album ID");
      this.album = album;
      return this;
  }

  getReleased() {
    return this.realeased;
  }

  setReleased(released) {
    if (typeof released !== 'number' && isNaN(released)) throw new Error ("invalid realeased date");
      this.released = new Date(released).toDateString();
      return this;
  }

  getLabel() {
    return labels.map.get(this.id);
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
    return artists.map.get(this.id);
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
    return genres.map.get(this.id);
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
    if (bio.length > 256) throw new Error ('bio is too long');
      this.bio = bio;
      return this;
  }

  getCover() {
    return this.cover;
  }

  setCover(cover) {
    if (typeof cover !== 'string' || cover === null || cover === '') throw new Error ('invalid cover');
    this.cover = cover;
    return this;
  }

  isValid() {
    return typeof this.album !== 'undefined' &&
    typeof this.released !== 'undefined' &&
    typeof this.labelID !== 'undefined' &&
    typeof this.artistID !== 'undefined' &&
    typeof this.genreID !== 'undefined' &&
    typeof this.bio !== 'undefined' &&
    typeof this.cover !== 'undefined';
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
    if (bio.length > 256) throw new Error ('bio is too long');
      this.bio = bio;
      return this;
  }

  isValid() {
    return typeof this.genre !== 'undefined' &&
    typeof this.bio !== 'undefined';
  }

}

class Label extends Entity {
  constructor (id) {
    super(id);
  }

  getName() {
    return this.label;
  }

  setName(label) {
    if (typeof label !== 'string' || label === null || label === '') throw new Error ("ivalid label name");
      this.label = label;
      return this;
  }

  getBio() {
    return this.bio;
  }

  setBio(bio) {
    if (typeof bio !== 'string' || bio === null || bio === '') throw new Error ('invalid bio');
    if (bio.length > 256) throw new Error ('bio is too long');
      this.bio = bio;
      return this;
  }

  isValid() {
    return typeof this.label !== 'undefined' &&
    typeof this.bio !== 'undefined';
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
                    .setReleased(1680003450303)
                    .setBio('Some random text for example')
                    .setCover('./covers/randomcover.jpg');

const song = songs.new()
                  .setName('Toosie Slide')
                  .setDuration(121000)
                  .setReleased(1680003450303)
                  .setText('Some random text for example')
                  .setBPM(140)
                  .setExplicit(false)
                  .setFileID(0);

const label = labels.new()
                   .setName('Republic')
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
console.log(artist.isValid());
console.log(song.isValid());
console.log(album.isValid());
console.log(genre.isValid());
console.log(label.isValid());

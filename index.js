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
    if (typeof gender !== 'number' || gender === null || isNaN(gender) === true || gender === '') throw new Error ('invalid gender');
      this.gender = gender;
      return this;
  }

  isBand() {
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
    if (bio.length < 256) {
      this.bio = bio;
      return this;
    } else {
      throw new Error ('bio is too long');
    }
  }

  isValid() {
    return typeof this.name !== 'undefined';
    return typeof this.gender !== 'undefined';
    return typeof this.band !== 'undefined';
    return typeof this.bio !== 'undefined';
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
    } else if (typeof album === 'number' || isNaN(album) === false) {
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
    } else if (typeof artist === 'number' || isNaN(artist) === false) {
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
    } else if (typeof genre === 'number' || isNaN(gender) === false) {
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
    if (typeof duration !== 'number' || duration === null || isNaN(duration) === true || duration === '') throw new Error ('invalid duration');
      this.duration = duration;
      return this;
  }

  getReleased() {
    return this.realeased;
  }

  setReleased(released) {
    if (typeof released !== 'number' || released === null || isNaN(released) === true || released === '') throw new Error ("invalid realeased date");
      this.released = new Date(released);
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
    if (typeof bpm !== 'number' || bpm === null || isNaN(bpm) === true || bpm === '') throw new Error ("invalid bpm");
      if (bpm < 500) {
        this.bpm = bpm;
        return this;
      } else {
        throw new Error ("invalid length of bpm");
      }
  }

  isExplicit() {
    return this.explicit;
  }

  setExplicit(explicit) {
    if (typeof explicit !== 'boolean' || explicit === null || explicit === '') throw new Error ('invalid explicit');
    this.explicit = explicit;
    return this;
  }

  getFileID() {
    return this.fileID;
  }

  setFileID(fileID) {
    if (typeof fileID !== 'number' || fileID === null || isNaN(fileID) === true || fileID === '') throw new Error ('invalid file ID');
    this.fileID = fileID;
    return this;
  }

  isValid() {
    return typeof this.name !== 'undefined';
    return typeof this.album !== 'undefined';
    return typeof this.artist !== 'undefined';
    return typeof this.genre !== 'undefined';
    return typeof this.duration !== 'undefined';
    return typeof this.released !== 'undefined';
    return typeof this.text !== 'undefined';
    return typeof this.bpm !== 'undefined';
    return typeof this.explicit !== 'undefined';
    return typeof this.fileID !== 'undefined';
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
    if (typeof album !== 'number' || album === null || isNaN(album) === true || album < 0) throw new Error ("invalid album ID");
      this.album = album;
      return this;
  }

  getReleased() {
    return this.realeased;
  }

  setReleased(released) {
    if (typeof released !== 'number' || released === null || isNaN(released) === true || released === '') throw new Error ("invalid realeased date");
      this.released = new Date(released);
      return this;
  }

  getName() {
    return labels.map.get(this.id);
  }

  setName(label) {
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
    } else if (typeof artist === 'number' || isNaN(gender) === false) {
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
    } else if (typeof genre === 'number' || isNaN(gender) === false) {
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
    if (bio.length < 256) {
      this.bio = bio;
      return this;
    } else {
      throw new Error ('bio is too long');
    }
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
    return typeof this.album !== 'undefined';
    return typeof this.released !== 'undefined';
    return typeof this.label !== 'undefined';
    return typeof this.artist !== 'undefined';
    return typeof this.genre !== 'undefined';
    return typeof this.bio !== 'undefined';
    return typeof this.cover !== 'undefined';
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
    if (bio.length < 256) {
      this.bio = bio;
      return this;
    } else {
      throw new Error ('bio is too long');
    }
  }

  isValid() {
    return typeof this.genre !== 'undefined';
    return typeof this.bio !== 'undefined';
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
    if (bio.length < 256) {
      this.bio = bio;
      return this;
    } else {
      throw new Error ('bio is too long');
    }
  }

  isValid() {
    return typeof this.label !== 'undefined';
    return typeof this.bio !== 'undefined';
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
                    .setReleased(1580003450303)
                    .setBio('Some random text for example')
                    .setCover('./covers/randomcover.jpg');

const song = songs.new()
                  .setName('Toosie Slide')
                  .setDuration(121000)
                  .setReleased(1580003450303)
                  .setText('Some random text for example')
                  .setBPM(140)
                  .setExplicit(false)
                  .setFileID(0);

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
console.log(artist.isValid());
console.log(song.isValid());
console.log(album.isValid());
console.log(genre.isValid());
console.log(label.isValid());

Entity = require('./entity.js');

module.exports = class Song extends Entity { //наследование свойств из родительского класса
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
    return this.albumID;
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
    return this.artistID;
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
    return this.genreID;
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

  getSongPath() {
    return this.path;
  }

  setSongPath(path) {
    if (typeof path !== 'string' || path === null || path === '') throw new Error ('invalid cover');
      this.path = path;
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

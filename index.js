const fs = require('fs');
let mimeTypes = {
  "html": "text/html",
  "png": "image/png",
  "jpg": "image/png",
  "css":"text/css",
  "js":"text/javascript",
  "rar": "application/x-rar-compressed",
  "zip": "application/zip"
}

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
      this.released = new Date(released);
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

function saveFiles(songs, albums, artists, labels, genres) {
  try {
    fs.readdirSync('./data');
  } catch (err) {
    fs.mkdirSync('./data');
  }

  console.log('lets save');

  let writeableStreamSongs = fs.createWriteStream(`./data/songs.json`);
  let songsCount = 0;
  writeableStreamSongs.write("[\n");
  songs.map.forEach((item, i) => {
    songsCount ++;
    if (songsCount > 1) {
      writeableStreamSongs.write(",\n");
    }
    writeableStreamSongs.write(JSON.stringify(item));
  });
  writeableStreamSongs.end('\n]');

  let writeableStreamAlbums = fs.createWriteStream(`./data/albums.json`);
  let albumsCount = 0;
  writeableStreamAlbums.write('[\n');
  albums.map.forEach((item, i) => {
    albumsCount++
    if (albumsCount > 1) {
      writeableStreamAlbums.write(",\n");
    }
    writeableStreamAlbums.write(JSON.stringify(item))
  });
  writeableStreamAlbums.end('\n]');

  let writeableStreamArtists = fs.createWriteStream(`./data/artists.json`);
  let artistsCount = 0;
  writeableStreamArtists.write('[\n');
  artists.map.forEach((item, i) => {
    artistsCount++
    if (artistsCount > 1) {
      writeableStreamArtists.write(",\n");
    }
    writeableStreamArtists.write(JSON.stringify(item));
  });
  writeableStreamArtists.end('\n]');

  let writeableStreamLabels = fs.createWriteStream(`./data/labels.json`);
  let labelCount = 0;
  writeableStreamLabels.write('[\n');
  labels.map.forEach((item, i) => {
    labelCount++;
    if (labelCount > 1) {
      writeableStreamLabels.write(",\n");
    }
    writeableStreamLabels.write(JSON.stringify(item));
  });
  writeableStreamLabels.end('\n]');

  let writeableStreamGenres = fs.createWriteStream(`./data/genres.json`);
  let genresCount = 0;
  writeableStreamGenres.write('[\n');
  genres.map.forEach((item, i) => {
    genresCount++
    if (genresCount > 1) {
      writeableStreamGenres.write(",\n");
    }
    writeableStreamGenres.write(JSON.stringify(item));
  });
  writeableStreamGenres.end('\n]');
}

function parseFiles() {
  console.log('lets parse');

  let data = fs.readdirSync('./data/');

  let counter = 0;

  data.forEach((item, i) => {
    fs.readFile(`./data/${item}`, function (err, forParse) {
      counter++;
      let parse = JSON.parse(forParse);
      switch(item) {
        case 'songs.json':
          songs.map.clear();
          songs.iterator = -1;
          parse.forEach((item, i) => {
            const song = songs.new()
                              .setName(String(parse[i].name))
                              .setDuration(Number(parse[i].duration))
                              .setReleased(Date.parse(parse[i].released))
                              .setText(String(parse[i].text))
                              .setBPM(Number(parse[i].bpm))
                              .setExplicit(Boolean(parse[i].explicit))
                              .setFileID(Number(parse[i].fileID))
                              .setAlbum(Number(parse[i].albumID))
                              .setArtist(Number(parse[i].artistID))
                              .setGenre(Number(parse[i].genreID))
                              .setSongPath(String(parse[i].path));
            songs.set(song);
          });
          break;
         case 'albums.json':
           albums.map.clear();
           albums.iterator = -1;
           parse.forEach((item, i) => {
             const album = albums.new()
                                 .setAlbum(Number(parse[i].album))
                                 .setReleased(Date.parse(parse[i].released))
                                 .setBio(String(parse[i].bio))
                                 .setCover(String(parse[i].cover));
             albums.set(album);
           });
           break;
         case 'artists.json':
           artists.map.clear();
           artists.iterator = -1;
           parse.forEach((item, i) => {
             const atrist = artists.new()
                                   .setName(String(parse[i].name))
                                   .setGender(Number(parse[i].gender))
                                   .setBand(Boolean(parse[i].band))
                                   .setBio(String(parse[i].bio));
             artists.set(atrist);
           });
           break;
         case 'genres.json':
           genres.map.clear();
           genres.iterator = -1;
           parse.forEach((item, i) => {
             const genre = genres.new()
                               .setGenre(String(parse[i].genre))
                               .setBio(String(parse[i].bio));
             genres.set(genre);
           });
           break;
         case 'labels.json':
           genres.map.clear();
           genres.iterator = -1;
           parse.forEach((item, i) => {
             const label = labels.new()
                                 .setName(String(parse[i].name))
                                 .setBio(String(parse[i].bio));
             labels.set(label);
           });
           break;
         default:
           console.log('oops!')
           break;
      }
       if (counter === 5) {
         console.log('All files downloaded');
       }
    });
  });
}

function search(text) {
  if (text != 'string') {
    text = text.toString();
  }
  let splitedText = text.split(' ');
  console.log(splitedText);
  let matches = [];

  songs.map.forEach((item, i) => {
    let countSongMatch = 0;
    for (value of splitedText) {
      let regexp = new RegExp(value, "gi");
      if (item.name.search(regexp) > -1) {
        countSongMatch++;
      }
    }
    if (countSongMatch != 0) {
      // let match = {};
      // match.name = item.name;
      // match.countMatch = countSongMatch;
      // match.id = item.id;
      // match.type = 'song';
      matches.push(item);
    }
  });

  artists.map.forEach((item, i) => {
    let countArtistMatch = 0;
    for (value of splitedText) {
      let regexp = new RegExp(value, "gi");
      if (item.name.search(regexp) > -1) {
        countArtistMatch++;
      }
    }
    if (countArtistMatch != 0) {
      // let match = {};
      // match.name = item.name;
      // match.countMatch = countArtistMatch;
      // match.id = item.id;
      // match.type = 'artist';
      matches.push(item);
    }
  });

//   matches.sort(function(a, b) {
//     return b.countMatch - a.countMatch;
//   }
// );
  console.log(matches);
  return matches;
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
                  .setFileID(0)
                  .setSongPath('/music/MRKkd4nSC7zH.mp3');

const song_01 = songs.new()
                     .setName('58')
                     .setDuration(151000)
                     .setReleased(1690003450303)
                     .setText('Some random text for example')
                     .setBPM(60)
                     .setExplicit(true)
                     .setFileID(1)
                     .setSongPath('/music/UkpuuEzF0rBh.mp3');

const song_02 = songs.new()
                     .setName('Seven Nation Army')
                     .setDuration(231000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(2)
                     .setSongPath('/music/DRwzmr5Q03bz.mp3');

const song_03 = songs.new()
                     .setName('Move ya hips')
                     .setDuration(231000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(3);

const song_04 = songs.new()
                     .setName('Neon Clouds')
                     .setDuration(239000)
                     .setReleased(1760003450303)
                     .setText('Some random text for example')
                     .setBPM(60)
                     .setExplicit(true)
                     .setFileID(4);

const song_05 = songs.new()
                     .setName('Drinks')
                     .setDuration(131000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(140)
                     .setExplicit(true)
                     .setFileID(5);

const song_06 = songs.new()
                     .setName('Bitch')
                     .setDuration(431000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(6);

const song_07 = songs.new()
                     .setName('Bandit')
                     .setDuration(341000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(60)
                     .setExplicit(true)
                     .setFileID(7);

const song_08 = songs.new()
                     .setName('Be my Queen')
                     .setDuration(521000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(140)
                     .setExplicit(true)
                     .setFileID(8);

const song_09 = songs.new()
                     .setName('Гвозди')
                     .setDuration(191000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(9);

const song_10 = songs.new()
                     .setName('Стреляй')
                     .setDuration(4131000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(60)
                     .setExplicit(true)
                     .setFileID(10);

const song_11 = songs.new()
                     .setName('This City')
                     .setDuration(521000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(140)
                     .setExplicit(true)
                     .setFileID(11);

const song_12 = songs.new()
                     .setName('The world is mine')
                     .setDuration(961000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(12);

const song_13 = songs.new()
                     .setName('Still feel')
                     .setDuration(231000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(60)
                     .setExplicit(true)
                     .setFileID(13);

const song_14 = songs.new()
                     .setName('Its Called Freefall')
                     .setDuration(231000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(140)
                     .setExplicit(true)
                     .setFileID(14);

const song_15 = songs.new()
                     .setName('Тактика атаки')
                     .setDuration(231000)
                     .setReleased(1360003450303)
                     .setText('Some random text for example')
                     .setBPM(105)
                     .setExplicit(true)
                     .setFileID(15);

const song_16 = songs.new()
                    .setName('Алмаз Сознания')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_17 = songs.new()
                    .setName('Долгополов фристайл')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_18 = songs.new()
                    .setName('Wishing Well')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_19 = songs.new()
                    .setName('Stuck in a dream')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_20 = songs.new()
                    .setName('Sick and tired')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_21 = songs.new()
                    .setName('Happy home')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_22 = songs.new()
                    .setName('Скил')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_23 = songs.new()
                    .setName('Chicago Freestyle')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_24 = songs.new()
                    .setName('Коалко')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_25 = songs.new()
                    .setName('Hell n Back')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_26 = songs.new()
                    .setName('Told ya')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_27 = songs.new()
                    .setName('Mazel tov')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_28 = songs.new()
                    .setName('Swish')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const song_29 = songs.new()
                    .setName('Magic')
                    .setDuration(231000)
                    .setReleased(1360003450303)
                    .setText('Some random text for example')
                    .setBPM(105)
                    .setExplicit(true)
                    .setFileID(15);

const label = labels.new()
                    .setName('Republic')
                    .setBio('Some random text for example');

const artist = artists.new()
                      .setName('Drake')
                      .setGender(1)
                      .setBand(false)
                      .setBio('Canadian rapper, singer, songwriter, executive producer, actor, and entrepreneur');

const artist_01 = artists.new()
                        .setName('Егор крид')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_02 = artists.new()
                        .setName('The white stripes')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_03 = artists.new()
                        .setName('Asap ferg')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_04 = artists.new()
                        .setName('Thomas Mraz')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_05 = artists.new()
                        .setName('Cyn')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_06 = artists.new()
                        .setName('Pouya')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_07 = artists.new()
                        .setName('Juice wrld')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_08 = artists.new()
                        .setName('Seafret')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_09 = artists.new()
                        .setName('Loqiemean')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_10 = artists.new()
                        .setName('Truwer')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_11 = artists.new()
                        .setName('Sam fischer')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_12 = artists.new()
                        .setName('Samm henshaw')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_13 = artists.new()
                        .setName('half alive')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_14 = artists.new()
                        .setName('Rainbow kitten surprise')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_15 = artists.new()
                        .setName('Обстоятельства')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_16 = artists.new()
                        .setName('Gone.fludd')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_17 = artists.new()
                        .setName('Basic boy')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_18 = artists.new()
                        .setName('Juice wrld')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_19 = artists.new()
                        .setName('Lil mosey')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_20 = artists.new()
                        .setName('iann dior')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_21 = artists.new()
                        .setName('X ambassadors')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_22 = artists.new()
                        .setName('104')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_23 = artists.new()
                        .setName('Drake')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_24 = artists.new()
                        .setName('Loqiemean')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_25 = artists.new()
                        .setName('Azizi gibson')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_26 = artists.new()
                        .setName('Lil Xan')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_27 = artists.new()
                        .setName('Asap ferg')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_28 = artists.new()
                        .setName('Mike stud')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const artist_29 = artists.new()
                        .setName('Lil skies')
                        .setGender(1)
                        .setBand(false)
                        .setBio('Some random text for example');

const genre = genres.new()
                    .setGenre('Rap')
                    .setBio('Some random text for example');

song.setAlbum(album)
    .setArtist(artist)
    .setGenre(genre);

song_01.setAlbum(album)
       .setArtist(artist)
       .setGenre(genre);

album.setLabel(label)
     .setArtist(artist)
     .setGenre(genre);

albums.set(album);
songs.set(song);
songs.set(song_01);
songs.set(song_02);
songs.set(song_03);
songs.set(song_04);
songs.set(song_05);
songs.set(song_06);
songs.set(song_07);
songs.set(song_08);
songs.set(song_09);
songs.set(song_10);
songs.set(song_11);
songs.set(song_12);
songs.set(song_13);
songs.set(song_14);
songs.set(song_15);
songs.set(song_16);
songs.set(song_17);
songs.set(song_18);
songs.set(song_19);
songs.set(song_20);
songs.set(song_21);
songs.set(song_22);
songs.set(song_23);
songs.set(song_24);
songs.set(song_25);
songs.set(song_26);
songs.set(song_27);
songs.set(song_28);
songs.set(song_29);
labels.set(label);
artists.set(artist);
artists.set(artist_01);
artists.set(artist_02);
artists.set(artist_03);
artists.set(artist_04);
artists.set(artist_05);
artists.set(artist_06);
artists.set(artist_07);
artists.set(artist_08);
artists.set(artist_09);
artists.set(artist_10);
artists.set(artist_11);
artists.set(artist_12);
artists.set(artist_13);
artists.set(artist_14);
artists.set(artist_15);
artists.set(artist_16);
artists.set(artist_17);
artists.set(artist_18);
artists.set(artist_19);
artists.set(artist_20);
artists.set(artist_21);
artists.set(artist_22);
artists.set(artist_23);
artists.set(artist_24);
artists.set(artist_25);
artists.set(artist_26);
artists.set(artist_27);
artists.set(artist_28);
artists.set(artist_29);
genres.set(genre);

function router (req, res, requestedFile) {
  console.log('run router');
  let dataURL = [
    {url: /^\/$/, function: getHello},
    {url: /^\/api\/songs/, function: getSongs},
    {url: /^\/api\/artists/, function: getArtists},
    {url: /^\/api\/search/, function: getSearch},
    {url: /^\/music/, function: getMusic},
    {url: /^\/undefined/, function: getError}
    // {url: /^\/css\/master.css/, function: getCss }
  ];
  for (value of dataURL) {
    console.log(`${value.url} vs ${requestedFile} + ${value.url.test(requestedFile)}`);
    if (value.url.test(requestedFile)) {
      value.function(req, res, requestedFile);
      return true;
    }
  }
  loadFile(req, res, requestedFile);
}

function getError(req, res, requestedFile) {
  res.end();
}

function getMusic(req, res, requestedFile) {
  res.setHeader('Content-Type', 'audio/mpeg; utf-8;');
  let readStream = fs.ReadStream('.' + `${requestedFile}`);
  res.statusCode = 200;
  readStream.pipe(res);
}

function loadFile(req, res, requestedFile) {

  try {
    let rootDirectory = '/frontend/';
    let path = require('path');
    let normalizedFile = path.normalize(requestedFile);
    let filename = path.join(rootDirectory, normalizedFile);

    let fileExtension = requestedFile.split(".");
    let fileType = fileExtension[fileExtension.length-1];
    let contentType = 'application/octet-stream';
    if (typeof mimeTypes[fileType] !== "undefined") {
      contentType = mimeTypes[fileType];
    }
    console.log(fileType);
    console.log(contentType);
    console.log(requestedFile);

    res.setHeader('Content-Type', `${contentType}; utf-8`);
    let readStream = fs.ReadStream('.' + `${filename}`);
    res.statusCode = 200;
    readStream.pipe(res);
  } catch (e) {
    res.statusCode = 404;
  }
}


// function getCss (req, res) {
//   res.setHeader('Content-Type', 'text/css; utf-8;');
//   let readStream = fs.ReadStream(`./css/master.css`);
//   res.statusCode = 200;
//   readStream.pipe(res);
// }

function getHello (req, res) {
  res.setHeader('Content-Type', 'text/html; utf-8;');
  let readStream = fs.ReadStream(`./frontend/interface/menu.html`);
  res.statusCode = 200;
  readStream.pipe(res);
}

function getSongs(req, res) {
  let data = [];
  songs.map.forEach((item, i) => {
    if (i < 30) {
      data.push(item);
    }
  });
  res.end(JSON.stringify(data));
}

function getArtists(req, res) {
  let data = [];
  artists.map.forEach((item, i) => {
    if (i < 30) {
      data.push(item);
    }
  });
  res.end(JSON.stringify(data));
}

function getSearch(req, res, requestedFile) {
  let [address, query] = requestedFile.split('?');
  if (query) {
    console.log(query);
    let [key, value] = query.split('=');
    if (value === '') {
      res.end('You did not fill the form');
    }
    let result = search(value);
    res.end(JSON.stringify(result));
  }
}

saveFiles (songs, albums, artists, labels, genres);
//setInterval (() => saveFiles (songs, albums, artists, labels, genres), 5000);
setTimeout (() => parseFiles(), 1000);

//setTimeout (() => search('58 Toos кр'), 2000);

const http = require('http');
const port = 3000;
const server = http.createServer();

server.on('request', function(req, res) {
  let requestedFile = decodeURI(req.url);
  let data = '';

  req.on('data', function(chunk) {
    data += chunk.toString();
  });

  req.on('end', function() {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    router(req, res, requestedFile);
  });
});

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }    console.log(`server is listening on ${port}`);
});

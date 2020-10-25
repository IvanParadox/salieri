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

albums = require('./albums.js');
artists = require('./artists.js');
genres = require('./genres.js');
labels = require('./labels.js');
songs = require('./songs.js');

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

function router (req, res, requestedFile) {
  console.log('run router');
  let dataURL = [
    {url: /^\/$/, function: getHello},
    {url: /^\/api\/songs/, function: getSongs},
    {url: /^\/api\/artists/, function: getArtists},
    {url: /^\/api\/search/, function: getSearch},
    {url: /^\/music/, function: getMusic},
    {url: /^\/undefined/, function: getError},
    {url: /^\/git/, function: updateCode}
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
  if (req.headers['x-github-event'] == "push") {
    cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
    cmd.get('./git.sh', (err, data) => {  // Run our script
      if (data) console.log(data);
      if (err) console.log(err);
    });
    cmd.run('refresh');  // Refresh project
  }
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
      getSongs(req, res);
    }
    let result = search(value);
    res.end(JSON.stringify(result));
  }
}

const express = require('express')
const app = express()
const cmd = require("node-cmd");

app.post('/git');

function updateCode (req, res) {
    // If event is "push"
    if (req.headers['x-github-event'] == "push") {
      cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
      cmd.get('./git.sh', (err, data) => {  // Run our script
        if (data) console.log(data);
        if (err) console.log(err);
      });
      cmd.run('refresh');  // Refresh project

      console.log("> [GIT] Updated with origin/master");
    }

    return res.statusCode = 200; // Send back OK status
}

parseFiles();

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

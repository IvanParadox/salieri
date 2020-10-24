//test number 20
const fs = require('fs');

const assert = require('assert');
const index = require('./index.js');

const song_new = index.songs.new()
                  .setName('test')
                  .setDuration(555555)
                  .setReleased(1080003450303)
                  .setText('Some random text for example')
                  .setBPM(95)
                  .setExplicit(false)
                  .setFileID(0);

index.songs.set(song_new);

let writeableStreamSongs = fs.createWriteStream(`./data/songs.json`);
let songsCount = 0;
writeableStreamSongs.write("[\n");
index.songs.map.forEach((item, i) => {
  songsCount ++;
  if (songsCount > 1) {
    writeableStreamSongs.write(",\n");
  }
  writeableStreamSongs.write(JSON.stringify(item));
});
writeableStreamSongs.end('\n]');

fs.readFileSync(`./data/songs.json`, function (err, forParse) {
    let parse = JSON.parse(forParse);

    console.log(parse[30].name);
    console.log(song_new.name);
});

Entities = require('./entities.js');
Song = require('./song.js')

class Songs extends Entities {

  new() {
    return new Song(this.generateID());
  }

}

module.exports = new Songs();

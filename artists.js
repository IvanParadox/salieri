Entities = require('./entities.js');
Artist = require('./artist.js');

class Artists extends Entities {

  new () {
    return new Artist(this.generateID());
  }

}

module.exports = new Artists();

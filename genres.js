Entities = require('./entities.js');
Genre = require('./genre');

class Genres extends Entities {

  new() {
    return new Genre(this.generateID());
  }

}

module.exports = new Genres();

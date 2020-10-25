Entities = require('./entities.js');
Album = require('./album.js');

class Albums extends Entities {

  new() {
    return new Album(this.generateID());
  }

}

module.exports = new Albums();

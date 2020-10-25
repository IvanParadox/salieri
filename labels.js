Entities = require('./entities.js');
Label = require('./label.js');

class Labels extends Entities {

  new() {
    return new Label(this.generateID());
  }

}

module.exports = new Labels();

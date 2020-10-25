Entity = require('./entity.js');

module.exports =  class Label extends Entity {
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

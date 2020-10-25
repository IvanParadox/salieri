Entity = require('./entity.js');

module.exports = class Artist extends Entity {
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

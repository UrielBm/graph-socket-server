const Band = require("./Band");

class ArrayBans {
  constructor() {
    this.bands = [
      new Band("Fun"),
      new Band("The roling Stones "),
      new Band("Bad bunny"),
      new Band("Avicii"),
    ];
  }
  getBands() {
    return this.bands;
  }
  addBand(name) {
    const newBand = new Band(name);
    this.bands = [...this.bands, newBand];
    return this.bands;
  }
  deleteBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }
  addvote(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes += 1;
      }
      return band;
    });
  }
  changeName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}
module.exports = ArrayBans;

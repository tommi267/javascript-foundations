class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
    this.robShipCounter = 0;
  }
  robShip() {
    if (this.robShipCounter < 5) {
      this.booty += 100;
      this.robShipCounter += 1;
      return 'YAARRR!'
    } else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!'
    }
  }
  liftCurse() {
    if (this.cursed) {
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!'
    } else {
      return 'You don\'t need to lift a curse!'
    }
  }
}
module.exports = Pirate;

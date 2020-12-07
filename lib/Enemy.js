const Potion = require('./Potion');
const Character = require('./Characters');
class Enemy extends Character {
constructor(name, weapon) {
    super();
 
  this.weapon = weapon;
  this.potion = new Potion();

 
}



 
}
Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

module.exports = Enemy;
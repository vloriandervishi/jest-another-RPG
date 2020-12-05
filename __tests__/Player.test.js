const Potion = require('../lib/__mocks__/Potion');
jest.mock('../lib/__mocks__/Potion.js');
console.log(new Potion());
const Player= require('../lib/Player.js');


test('create a player object',()=>{
const player= new Player('Dave');
expect(player.name).toBe('Dave');
expect(player.health).toEqual(expect.any(Number));
expect(player.strength).toEqual(expect.any(Number));
expect(player.agility).toEqual(expect.any(Number));
expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
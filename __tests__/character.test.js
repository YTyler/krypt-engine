import {Character} from './../src/character.js';
import {Equipment} from './../src/equipment.js'

describe('Character', () => {
  let player = new Character(7,3,5,5);
  let longSword = new Equipment('weapon',3,-1,0,0);

  test('test stat alignment', () => {
    expect(player.stats.str).toEqual(7);
    expect(player.stats.int).toEqual(3);
    expect(player.stats.con).toEqual(5);
    expect(player.stats.end).toEqual(5);
  });
  test('equip function test', () => {
    player.equip(longSword)
    expect(player.equipment.weapon).toEqual(longSword);

  });
})

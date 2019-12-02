import {Character} from './../src/character.js';
import {Equipment} from './../src/equipment.js'

describe('Character', () => {
  let player = new Character(7,3,5,5);
  let longSword = new Equipment('weapon',3,-1,0,0);
  let fingerGloves = new Equipment('hands',0,0,1,0);
  let leatherBody = new Equipment('body',0,0,2,0);
  let leatherBoots = new Equipment('legs',0,0,1,0);
  let enemy = new Character(2,2,2,2);

  player.equip(longSword);
  player.equip(fingerGloves);
  player.equip(leatherBody);
  player.equip(leatherBoots);

  beforeEach(() => {

  });

  test('test stat alignment', () => {
    expect(player.stats.str).toEqual(7);
    expect(player.stats.int).toEqual(3);
    expect(player.stats.con).toEqual(5);
    expect(player.stats.mag).toEqual(5);
  });
  test('equip function test', () => {

    expect(player.equipment.weapon).toEqual(longSword);

    expect(player.equipment.body).toEqual(leatherBody);
  });
  test('aggregate armor values', () => {
    let armorTest = player.armorValues();
    expect(armorTest[0]).toEqual(3);
    expect(armorTest[1]).toEqual(-1);
    expect(armorTest[2]).toEqual(3);
    expect(armorTest[3]).toEqual(0);
  });
  test('combat test',() => {
    player.attack(enemy);
    expect(enemy.health).toEqual(10);
  })
})

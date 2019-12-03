import {Character} from './../src/character.js';
import {Equipment} from './../src/equipment.js';
import {Spell} from './../src/spell.js'

describe('Character', () => {
let player
let enemy
let longSword
let fingerGloves
let leatherBody
let leatherBoots
let criticalStrike
let magicRockets

  beforeEach(() => {
    player = new Character(7,3,5,5);
    enemy = new Character(2,2,2,2);
    longSword = new Equipment('weapon',3,-1,0,0);
    fingerGloves = new Equipment('hands',0,0,1,0);
    leatherBody = new Equipment('body',0,0,2,0);
    leatherBoots = new Equipment('legs',0,0,1,0);
    criticalStrike = new Spell(.5,0,10);
    magicRockets = new Spell(2,0,10);

    player.equip(longSword);
    player.equip(fingerGloves);
    player.equip(leatherBody);
    player.equip(leatherBoots);
  });

  test('test stat alignment', () => {
    expect(player.attributes.str).toEqual(7);
    expect(player.attributes.int).toEqual(3);
    expect(player.attributes.con).toEqual(5);
    expect(player.attributes.mag).toEqual(5);
  });
  test('equip function test', () => {

    expect(player.equipment.weapon).toEqual(longSword);

    expect(player.equipment.body).toEqual(leatherBody);
  });
  test('aggregate armor values', () => {
    let armorTest = player.armorValues();
    expect(armorTest[0]).toEqual(3);
    expect(armorTest[1]).toEqual(0);
    expect(armorTest[2]).toEqual(3);
    expect(armorTest[3]).toEqual(0);
  });
  test('combat test',() => {
    player.attack(enemy);
    expect(enemy.health).toEqual(10);
  });
  test('spells-combat test', () => {
    player.castStr(criticalStrike, enemy);
    expect(enemy.health).toEqual(6.5);
  });
});

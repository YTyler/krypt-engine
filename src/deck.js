import {Character} from './character.js';
import {Equipment} from './equipment.js';
import {Spell} from './spell.js';
import {Item} from './item.js';
export {brawler, mage, thief, giantRat};

//ENEMY QUANTITIES
let rat_num = 4;

//INITIALIZATION

//Characters
let brawler = new Character(5,3,8,3);
let mage = new Character(2,9,4,8);
let thief = new Character(7,5,5,5);

//Enemy Arrays
//giant rats
let giantRat = [];
for (let i = 0; i < rat_num; i++) {
  giantRat.push(new Character(4,2,2,2));
}
//Equipment
//starting brawler gear
let broadsword = new Equipment('weapon',2,0,0,0);
let heavyLeather = new Equipment('body',0,0,4,0);
let leatherGloves = new Equipment('hands',0,0,2,0);
let leatherBoots = new Equipment('feet',0,0,2,0);

//starting mage gear
let staff = new Equipment('weapon',1,0,0,0);
let robe = new Equipment('body',0,0,1,0);
let mittens = new Equipment('hands',0,0,1,0);
let sandals = new Equipment('feet',0,0,1,0);

//starting theif gear
let dirk = new Equipment('weapon',1,0,0,0);
let lightLeather = new Equipment('body',0,0,2,0);
//leatherGloves from brawler
//leatherBoots from brawler

//Items
let redBerry = new Item(10, 'health');
let blueBerry = new Item(10, 'health');
let redPotion = new Item(25, 'magic');
let bluePotion = new Item(25, 'magic');

//Spells
let bite = new Spell(4,0,15,'str');
let tailWhip =  new Spell (2,0,5,'str');
let charge = new Spell (3,0,10, 'str');
let heavyBlow = new Spell (4,0,25,'str');
// let sharpenSenses = new spell (0,0,5,'int'); // Light Heal?

//Add Spells to character.spells
for (let i = 0; i < rat_num; i++) {
  giantRat[i].spells = [bite, tailWhip];
}
//Itemization

//fill brawler equipment & inventory
brawler.equip(broadsword);
brawler.equip(heavyLeather);
brawler.equip(leatherGloves);
brawler.equip(leatherBoots);
brawler.inventory.bag.push(redPotion);

//fill mage equipment & inventory
mage.equip(staff);
mage.equip(robe);
mage.equip(mittens);
mage.equip(sandals);
mage.inventory.bag.push(bluePotion);

//fill thief equipment & inventory
thief.equip(dirk);
thief.equip(lightLeather);
thief.equip(leatherGloves);
thief.equip(leatherBoots);
thief.inventory.bag.push(redBerry);
thief.inventory.bag.push(blueBerry);

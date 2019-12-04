import {Item} from './item.js'

export class Character {
  constructor(str, int, con, mag){
  //Character Attributes
    //this.level = 1;
    //this.xp = 0;
    //this.money = 0;
    //this.armor = //calculate armor;
    this.health = {value:con * 10, max:con*10};
    this.magic = {value:mag * 10, max:mag * 10};
    this.attributes = {
      str: str,
      int: int,
      con: con,
      mag: mag
    };
    this.inventory = {bag:[], bagSpace: 10};
    this.equipment = {
      weapon: '',
      hands:'',
      body:'',
      feet:'',
    };
  }
  //Character Methods
  //Combat Methods
  attack(target) {
    let eStats = this.armorValues();
    const damage = this.attributes.str + eStats[0];
    target.health.value -= damage;
    return damage;
  }

  castInt(spell, target) {
    let eStats = this.armorValues();
    let damage = this.attributes.int + (this.attributes.int * spell.baseMod);
    damage += eStats[1];
    target.health.value -= damage;
    return damage;
  }

  castStr(spell, target) {
    let eStats = this.armorValues();
    let damage = this.attributes.str + (this.attributes.str * spell.baseMod);
    damage += eStats[0];
    target.health.value -= damage;
    return damage;
  }

  //Management Methods
  equip(equipment) {
    const keys = Object.keys(this.equipment);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === equipment.type){
        this.equipment[keys[i]] = equipment;
      }
    }
  }

  pickUp(item){
    if(this.checkInventory(item.name)){
       this.inventory.bag[this.searchItem(item.name)].quantity += 1;
      }
    else {
      this.inventory.bag.push(new Item(item.name, item.amount, item.type, item.quantity));
    }
  }

  use(item, target) {
    if (this.checkInventory(item.name)){
      target[item.type].value += item.amount; //change value
      if (target[item.type].value > target[item.type].max) { //limit change to max value
        target[item.type].value = target[item.type].max;
      }
      item.quantity -= 1;
      if (item.quantity === 0){
      } // finish after pickUp function
    } else {
      return 'not available';
    }
  }

  //Utility Methods
  searchItem(name) {
    for (let i = 0; i < this.inventory.bag.length; i++) {
      if (this.inventory.bag[i].name === name) { return i; }
    }
  }


  armorValues() {
    let temp = [0,0,0,0];
    const keys = Object.keys(this.equipment);
    for (let i = 0; i < keys.length; i++) {
      if (this.equipment[keys[i]]) {
        temp[0] += this.equipment[keys[i]].stats[0];
        temp[1] += this.equipment[keys[i]].stats[1];
        temp[2] += this.equipment[keys[i]].stats[2];
        temp[3] += this.equipment[keys[i]].stats[3];
      }
    }
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] < 0) { temp[i] = 0; }
    }
    return temp;
  }

  checkInventory(name){
    for (let i = 0; i < this.inventory.bag.length; i++) {
      if (this.inventory.bag[i].name === name) {return true;}
    }
  return false;
  }

  resetInventory() {
    let temp = [];
    for (let i = 0; i < this.inventory.bag.length; i++) {
      if (this.inventory.bag[i]) {
        temp.push(this.inventory.bag[i]);
      }
    }
    this.inventory.bag = temp;
  }

}

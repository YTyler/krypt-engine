
//Character Class
export class Character {
  constructor(str, int, con, mag){
  //Character Attributes
    //this.level = 1;
    //this.xp = 0;
    //this.money = 0;
    //this.armor = //calculate armor;
    this.health = con * 10;
    this.magic = mag * 10;
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
    target.health -= damage;
    return damage;
  }

  castInt(spell, target) {
    let eStats = this.armorValues();
    let damage = this.attributes.int + (this.attributes.int * spell.baseMod);
    damage += eStats[1];
    target.health -= damage;
    return damage;
  }

  castStr(spell, target) {
    let eStats = this.armorValues();
    let damage = this.attributes.str + (this.attributes.str * spell.baseMod);
    damage += eStats[0];
    target.health -= damage;
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

  use(item, target) {
    // if (true) // Cycle through inventory for availabilty
    target[item.type] += item.amount;
  }

  //Utility Methods
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

}

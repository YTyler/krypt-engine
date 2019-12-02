
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
    this.stats = {
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
    let mods = this.armorValues();
    const damage = this.stats.str + mods[0];
    target.health -= damage;
    return damage;
  }

  //Utility Methods
  equip(equipment) {
    const keys = Object.keys(this.equipment);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === equipment.type){
        this.equipment[keys[i]] = equipment;
      }
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
    return temp;
  }

}

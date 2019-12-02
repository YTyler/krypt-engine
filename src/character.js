
//Character Class
export class Character {
  constructor(str, int, con, end){
  //Character Attributes
    //this.level = 1;
    //this.xp = 0;
    //this.money = 0;
    //this.armor = //calculate armor;
    this.health = con * 10;
    this.stamina = end * 10;
    this.stats = {
      str: str,
      int: int,
      con: con,
      end: end
    };
    this.inventory = {bag:[], bagSpace: 10};
    this.equipment = {
      weapon:'',
      hands:'',
      chest:'',
      legs:'',
      feet:'',
    };
  }
  //Character Methods
  attack(target) {
    const damage = this.stats.str;
    target.health -= damage;
    return damage;
  }
  equip(equipment) {
    const keys = Object.keys(this.equipment);
    console.log(this.equipment);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === equipment.type){
        this.equipment[keys[i]] = equipment;
      }
    }
  }

}

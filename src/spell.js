export class Spell {
  constructor(bMod, eMod, cost, stat) {
    this.baseMod = bMod,
    this.equipmentMod = eMod,
    this.cost = cost,
    this.stat = stat;
  }
  calculate(baseStats, equipmentStats){
    let temp = baseStats[this.stat] * this.baseMod + equipmentStats[this.stat] * this.equipmentMod;
    return temp
  }
}

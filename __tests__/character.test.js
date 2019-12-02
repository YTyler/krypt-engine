import {Character} from './../src/character.js';

describe('Character', () => {
  let player = new Character(7,3,5,5);

  test('test stat alignment', () => {
    expect(player.stats.str).toEqual(7);
  });
})

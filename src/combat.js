
import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';

const player = deck.brawler;

export function combatStart(enemies) {
  let enemyArray = enemies; //enemy array changes depending on location or combat specs?
  $('.enemySide').html(''); //clears enemy slots


  for (let i = 0; i < enemyArray.length; i++) { //populates enemies
    $('.enemySide').append(`
      <div class="enemy${i+1}">
      <div id="health0">
      </div>
      <div class="healthBackground">
      <div id="en1Health"class='healthProgress'>
      <p class="barTitle">Health</p>
      </div>
      </div>
      <input type="radio" class="target" name="target" value="${i}">en1<br>
      1
      </div>
      `)
    }

    let deadCount = 0;

    while (deadCount < enemyArray.length && player.health.value > 0) {

      player.health.value -= 10;
      enemyArray[0].health.value -= 10;

      deadCount = 0;
      for (let j = 0; j < enemyArray.length; j++) {
        if (enemyArray[j].health.value < 1) {
          deadCount += 1;
        } else {
          //Attack
          //wait
        }
      }
      let move = false;
      while(move === false) {
        console.log('inside while');
        setTimeout(() => {
          console.log('inside timeout');
        $('#attackSubmit').click(function() {
            let target = enemyArray[parseInt($("input[name=target]:checked").val())];
            let damage = player.attack(target);

            move = true;
          }, 2000);
        });
      }
    }
    if (player.health.value > 0) {
      alert("you win!")
    } else {
      console.log("you lose :( ")
    }
  }

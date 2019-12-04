
import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';

const player = deck.brawler;
// const = playerTurn = true;

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

    console.log(player);
    // while (player.health.value > 0) {
      //Player turn
      let deadCount = 0;


      if (deadCount < enemyArray.length) {
        console.log("LoopStart");
        // let turn = false;
        $('#attackSubmit').click(function() {
          console.log("Async");
          // console.log(turn);
          let target = enemyArray[parseInt($("input[name=target]:checked").val())];
          let damage = player.attack(target);
          console.log("damage");


          let damageNum = $("input[name=target]:checked").val();

          console.log("damageNum");

          $(`#health${damageNum}`).html(`<p id="damageOutput">${damage}</p>`);
          setTimeout(function(){

            $(`#${target} + Health`).html(``);
          }, 3000);
          // turn = true

          console.log("Async");

          // async (() => {
            // console.log(turn);
          });
          // let nextTurn = await (setTimeout() === true);

          // })();
          // Add fade-out and sound
          console.log("71");
          // MonsterTurn
          for (let j = 0; j < enemyArray; j++) {
            if (enemyArray[j].health.value > 0)
            setInterval(() => {
              (j.attack(player));
            }, 3000);
            else {
              deadCount += 1;
              // Death Animation
              (j++)
            }
            console.log("Async");
          }
          alert('end of if')
        } else {
          alert("youWinner you won");
          // break;
        }
      // }
      $('#youAreDead').show();
    }

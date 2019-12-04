
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
  console.log(enemies);


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

    while (player.health.value > 0) {
      player.health.value -= 20; //kills player
      enemyArray[0].health.value -= 10;
      console.log(player.health.value);
      console.log(enemyArray[0].health.value);

      //Player turn

      // alert("CombatStart")
      // if (deadCount <= enemyArray.length) {
        console.log("LoopStart");

        // (async() => {
          $('#attackSubmit').click(function() {
            let target = enemyArray[parseInt($("input[name=target]:checked").val())];
            let damage = player.attack(target);
            console.log("damage");

            // let damageNum = $("input[name=target]:checked").val();
            // $(`#health${damageNum}`).html(`<p id="damageOutput">${damage}</p>`);
            // setTimeout(function(){
              //
              //   $(`#${target} + Health`).html(``);
              //   }, 3000);
              // turn = true

            });
            // })();

            // MonsterTurn
            for (let j = 0; j < enemyArray.length; j++) {
              console.log("j="+j);
              if (enemyArray[j].health.value >= 0) {
              setInterval(() => {
                (enemyArray[j].attack(player));
              }, 3000);
            } else {
                deadCount += 1;
                if (deadCount >= enemyArray.length) {
                  alert("youWinner you won");
                  break;
                } else {
                  console.log("WHatever keep going");
                }

              }
              console.log("end of for");
            }

        }
        $('#youAreDead').show();
      }

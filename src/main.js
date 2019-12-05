import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';
import {combatStart} from './combat.js';

const player = deck.thief;
$('.playerProgress').animate({ width: player.health.value + "%"});

$(document).ready(function(){
  //Navigation
  $(".goCave").click(function(event) {
    event.preventDefault();
    $("#forest").hide();
    $("#crypt").hide();
    $("#cave").show();
  });

  $("#forestNarration").click(function() {
    $("#forestNarration").hide();
  });

  $(".goForest").click(function() {
    $("#cave").hide();
    $("#forest").show();
  });

  $("#caveNarration").click(function() {
    $("#caveNarration").hide();

  });

  $(".goCrypt").click(function() {
    $("#cave").hide();
    $("#crypt").show();
  });

  $("#cryptNarration").click(function() {
    $(".combatWindow").show();
    $("#cryptNarration").hide();
    fillEnemies(deck.giantRat)
    setTimeout(() => { combatStart(deck.giantRat)},1000);
  });

  //choose enemy's target
  function doAction(character, target) {
    let randomAction; //randomize action
    let randomSpell; //randomize spell choice
    let damage = false;

    while (damage === false) {
      randomAction = Math.floor(Math.random()*2);
      randomSpell = Math.floor(Math.random()* character.spells.length);
      switch (randomAction) { //set as number for testing; should be randomAction
        case 0: //Attack Section
        damage = character.attack(target);
        //html output 'Enemy Attacks'
        break;
        case 1: //Spell Section
        damage = character.cast(character.spells[randomSpell], target);
        //html output 'Enemy Cast "Spell"'
        break;
        case 2: //Item Section IN CONSTRUCTION

        break;
      }
    }
    return damage;
  }

  let enemyArray;

    function fillEnemies(enemies) {

      enemyArray = enemies;

      $('.enemySide').html(''); //clears enemy slots

      for (let i = 0; i < enemyArray.length; i++) { //populates enemies
        $('.enemySide').append(`
          <div class="enemy${i+1}">
          <div id="health${i+1}">
          <p><br></p>
          </div>
          <div class="healthBackground">
          <div id="en${i+1}Health" class='healthProgress'>
          <p class="barTitle">Health</p>
          </div>
          </div>
          <input type="radio" class="target" name="target" value="${i}"> enemy ${i+1}<br>
          </div>
          `)
          $(`#en${i+1}Health`).animate({ width: (enemyArray[i].health.value/enemyArray[i].health.max)*100 + "%"});
        }


      }

      $('.playerProgress').animate({ width: (player.health.value/player.health.max)*100 + "%"});

    $("#combatIntake").on('click', '.combatButton', function(event){
      event.preventDefault();
      let action = this['id'];
      let targetindex = parseInt($("input[name=target]:checked").val());
      let target = enemyArray[targetindex];


      //PLAYER ACTION
      if (action === "attackSubmit") {
        let damage = player.attack(target);

        setTimeout(function(){
          setTimeout(() => {
          $(`#health${targetindex + 1}`).html('<p><br></p>');
        },300);
        $(`#health${targetindex + 1}`).html(`<p id="damageOutput">${damage}</p>`);

        }, 600);

      } else if (action === "castSubmit"){
        player.cast(player.spells[0], target);

      } else if (action === "useSubmit"){
        console.log('item');
      } else {
        console.log("not connected");
      }

      //LOOP ENEMY ACTIONS
      let deadCount = 0;
      let enemyDamage

      for (let i=0; i <enemyArray.length; i++) {
        setTimeout(() => {
          enemyDamage = doAction(enemyArray[i], player)
          $(`#en${i+1}Health`).animate({ width: (enemyArray[i].health.value/enemyArray[i].health.max)*100 + "%"});
          $('.playerProgress').animate({ width: (player.health.value/player.health.max)*100 + "%"});
          setTimeout(() => {
            $(`#playerDamage`).html('<p><br></p>');
          },300);
          $(`#playerDamage`).html(`<p id="damageOutput">${enemyDamage}</p>`);
        },600*(i+1));
        if (enemyArray[i].health.value <= 0){
          deadCount += 1;
        }
      }
      if (player.health.value <= 0){
        $("#crypt").hide();
        $(".combatWindow").hide();
        $("#death").show();
      }else if(deadCount === enemyArray.length) {
        $("#crypt").hide();
        $(".combatWindow").hide();
        $("#win").show();
      }
    })
  });

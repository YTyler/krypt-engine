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

    $(".combatWindow").show();
    $("#caveNarration").hide();
    fillEnemies(deck.giantRat)
    setTimeout(() => { combatStart(deck.giantRat)},1000);
  });

  $(".goCrypt").click(function() {
    $("#cave").hide();
    $("#crypt").show();
  });

  $("#cryptNarration").click(function() {
    $("#cryptNarration").hide();
  });

  //choose enemy's target
  function doAction(character, target) {
    let randomAction; //randomize action
    let randomSpell; //randomize spell choice
    let damage = false;

    while (damage === false) {
      randomAction = Math.floor(Math.random()*2);
      randomSpell = Math.floor(Math.random()* character.spells.length);
      switch (0) { //set as number for testing; should be randomAction
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
  }

  function fillEnemies(enemies) {

    $('.enemySide').html(''); //clears enemy slots

    for (let i = 0; i < enemies.length; i++) { //populates enemies
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
    }

    $("#combatIntake").on('click', '.combatButton', function(event){
      event.preventDefault();
      let action = this['id'];
      let enemyArray = deck.giantRat;
      let target = enemyArray[parseInt($("input[name=target]:checked").val())]


      //PLAYER ACTION
      if (action === "attackSubmit") {
        player.attack(target);
        console.log(target);
      } else if (action === "castSubmit"){
        player.cast(player.spells[0], target);
        console.log(target);
      } else if (action === "useSubmit"){
        console.log('item');
      } else {
        console.log("not connected");
      }

      //LOOP ENEMY ACTIONS
      for (let i=0; i<enemyArray.length; i++) {
        setTimeout(() => {doAction(enemyArray[i], player)},3000);
        console.log(player);
      }


    })
  });

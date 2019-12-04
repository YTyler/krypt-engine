import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';

let enemyArray;

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
    $("#cryptNarration").hide();
  });

  //Combat
  const player = deck.brawler;

  //Caused by some combat initiator TBD
  let enemyArray = deck.giantRat; //enemy array changes depending on location or combat specs?
  $('.enemySide').html('');
  for (let i = 0; i < enemyArray.length; i++) {
    $('.enemySide').append(`
      <div class="enemy${i+1}">
      <div id="health0">
      </div>
      <div class="healthBackground">
      <div id="en1Health" class='healthProgress'>
      <p class="barTitle">Health</p>
      </div>
      </div>
      <input type="radio" class="target" name="target" value="${i}">en1<br>
      1
      </div>
      `);
    //Insert CSS Generation Here (in relation to i or i+1)
  }

  $('#attackSubmit').click(function() {
    let target = enemyArray[parseInt($("input[name=target]:checked").val())];
    console.log(target);
    let damage = player.attack(target); //player attacks
    //update displayed health
  });


  //choose enemy's target
  function doAction(character, target) {
    let randomAction; //randomize action
    let randomSpell; //randomize spell choice
    let damage = false;

    while (damage === false) {
      randomAction = Math.floor(Math.random()*2);
      randomSpell = Math.floor(Math.random()* character.spells.length);
      switch (randomSpell) { //set as number for testing; should be randomAction
        case 0: //Attack Section
        damage = character.attack(target);
        //html output 'Enemy Attacks'
        break;
        case 1: //Spell Section
        damage = character.cast(character.spells[randomSpell], target);
        //html output 'Enemy Cast "Spell"'
        break;
        case 2: //Item Section

        break;
      }
    }
  }

  doAction(enemyArray[0], player);
  console.log(player);
  console.log(deck.giantRat);


});

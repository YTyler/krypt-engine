import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';



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

  $('#attackSubmit').click(function() {
    let target = deck.giantRat[parseInt($("input[name=target]:checked").val())];
    // let target = deck[$("input[name=target]:checked").val()]; //val = 'giantRat[0]'
    console.log(target);
    let damage = player.attack(target); //player attackSubmit
    //update displayed health
  });

  let enemyArray = deck.giantRat; //change enemyArray by button click?
  $('#attackSubmit').click(function() {

    });
    $('.enemySide').html('')
    for (let i = 0; i < enemyArray.length; i++) {
      $('.enemySide').append(`
        <div class="enemy${i+1}">
        <div id="health0">
        </div>
        <div class="healthBackground">
        <div id="en1Health"class='healthProgress'>
        <p class="barTitle">Health</p>
        </div>
        </div>
        <input type="radio" class="target" name="target" value="${i}"> en1<br>
        1
        </div>
        `)
      }
});

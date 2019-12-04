import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Equipment} from './equipment.js';
import {Item} from './item.js';
import * as deck from './deck.js';
import {combatStart} from './combat.js';


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
    (async() => {
      $(".combatWindow").show();
      $("#caveNarration").hide();
      combatStart(deck.giantRat);
    })();
  });

  $(".goCrypt").click(function() {
    $("#cave").hide();
    $("#crypt").show();
  });

  $("#cryptNarration").click(function() {
    $("#cryptNarration").hide();
  });
});

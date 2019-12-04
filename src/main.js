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
    let damage = player.attack(target);
    // let damageNum = $("input[name=target]:checked").val()


    $(`#health${damageNum}`).html(`<p id="damageOutput">${damage}</p>`);

    setTimeout(function(){
      $(`#${target} + Health`).html(``);
    }, 3000);

    // let target = "en1";
    // let damage = 25;
    // $("#en1Damage").html("hi");
    // setTimeout(function(){
      //   $("#en1Damage").html("");
      // }, 3000);
      // console.log(damage);
    });
  });

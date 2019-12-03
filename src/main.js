import {Character} from './character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


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
  $('#attackSubmit').click(function() {
    let target = $("input[name=target]:checked").val();
    let damage = player.attack(target);
    $(`#${target} + Health`).html(`<p id="damageOutput">${damage}</p>`);
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

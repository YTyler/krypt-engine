// import {Placeholder} from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
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

});


//   const magicInput = $("#magicInput").val();
//   $('#magicProgress').animate({ width: magicInput + "%"});
// });
//
//
// $("#healthButton").click(function() {
  //   const healthInput = $("#healthInput").val();
  //   $('#healthProgress').animate({ width: healthInput + "%"});

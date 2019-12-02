import {Placeholder} from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#goCave").click(function(event) {
    event.preventDefault();
    $("#forest").hide();
    $("#cave").show();
  });

$("#goCrypt").click(function(event) {
    $("#cave").hide();
    $("#crypt").show();
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

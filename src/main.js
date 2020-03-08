import { Mars } from './mars.js';
import { Mercury } from './mercury.js';
import { Jupiter } from './jupiter.js';
import { Venus } from './venus.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('form#age').submit(function(event) {
    event.preventDefault();
    let age = parseInt($("input#age").val());
    let planet = $("input#planet").val();
    // let mars = $("input:name='mars']:checked").val();
    let mars = new Mars(age, planet);
    // let jupiter = new Jupiter(age);
    // let mercury = new Mercury(age);
    // let venus = new Venus(age);
    alert(planet);
    
    // let planetMars = new Mars(age, mars);
  
 
    // mars.lifeExpectancy(age);
    
    // jupiter.lifeExpectancy(age);
    // mercury.lifeExpectancy(age);
    // venus.lifeExpectancy(age);
   
    $("#result").text(" You are " + mars.marsAge(age) + " on planet " + mars.planetName() + " and your life expectancy there is" + " " + mars.lifeExpectancy(age) + " and ");
    // $("#result").append("<p>"+ mars.marsAge(age) + "<br>" + mars.lifeExpectancy(age) + "<p>");
  });
});
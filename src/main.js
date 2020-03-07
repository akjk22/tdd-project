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
    let mars = new Mars(age);
    let jupiter = new Jupiter(age);
    let mercury = new Mercury(age);
    let venus = new Venus(age);

    mars.marsAge(age);
    mars.lifeExpectancy(age);
    jupiter.lifeExpectancy(age);
    mercury.lifeExpectancy(age);
    venus.lifeExpectancy(age);
    console.log(mars.lifeExpectancy(age));
    $("#result").append("<p>"+ mars.marsAge(age) + "<br>" + mars.lifeExpectancy(age) + "<p>");
  });
});
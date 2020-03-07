import { Calculator } from './calculator.js';
import { Mars } from './mars.js';
import { Mercury } from './mercury.js';
import { Jupiter } from './jupiter.js';
import { Venus } from './venus.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




let calculator = new Calculator(20);
console.log(calculator.earthAge(20));

$(document).ready(function() {
  $('#form').submit(function(event) {
    
  });
});
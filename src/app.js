import p from './img/pikachu_sq.gif';
import h3 from './img/halo_3_general.png';
import h3b from './img/halo_3_general_bw.png';
import './style.css';
import 'particles.js';
import $ from 'jquery';
const particlesJson = require('./config/particles.json');
//const links = require('./config/links.json');
import links from './config/links.json';
//var h3 = require("./img/halo_3_general.png");
//var h3b = require("./img/halo_3_general_bw.png");

particlesJS('background', particlesJson);

$('.profile-image').attr('src', p);
$('#footer-image').attr('src', h3b);

//$('#footer-image').hover(
//    function() {
//        $(this).attr('src', h3);
//    },
//    function() {
//        $(this).attr('src', h3b);
//    }
//)

$('a').attr('target', '_blank');


console.log(links);

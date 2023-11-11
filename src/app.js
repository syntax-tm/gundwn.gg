import p from './img/pikachu_sq.gif';
import h3 from './img/halo_3_general.png';
import pcpartpicker from './img/pcpartpicker.png';
import amd from './img/amd.png';
import amd2 from './img/amd2.png';
import nvidia from './img/nvidia.png';
import asusRog from './img/asus_rog.png';
import corsair from './img/corsair.png';
import corsair2 from './img/corsair2.png';
import leopold from './img/leopold.png';
import logi from './img/logi.png';
import kvm from './img/kvm.png';
import gskill from './img/gskill.png';
import astro from './img/astro.png';
import desk from './img/desk.png';
//import zotac from './img/zotac.png';
import samsung from './img/samsung.png';
import samsung2 from './img/samsung_light.png';
import './css/style.css';
import 'particles.js';
import $ from 'jquery';
const particlesJson = require('./config/particles.json');
//const links = require('./config/links.json');
import links from './config/links.json';
//var h3 = require("./img/halo_3_general.png");
//var h3b = require("./img/halo_3_general_bw.png");

particlesJS('background', particlesJson);

$('#pcpartpicker').attr('src', pcpartpicker);
$('#cpu').attr('src', amd);
$('#psu').attr('src', corsair);
$('#display').attr('src', samsung);
$('#mobo').attr('src', asusRog);
$('#gpu').attr('src', nvidia);
$('#keyboard').attr('src', leopold);
$('#ram').attr('src', gskill);
$('#headset').attr('src', astro);
$('#mouse').attr('src', corsair);
$('#speakers').attr('src', logi);
$('#kvm').attr('src', kvm);
$('#storage').attr('src', samsung);
$('#chair').attr('src', corsair);
$('#desk').attr('src', desk);

$('.profile-image').attr('src', p);
$('#footer-image').attr('src', h3);

//$('#footer-image').hover(
//    function() {
//        $(this).attr('src', h3);
//    },
//    function() {
//        $(this).attr('src', h3b);
//    }
//)



$('a').attr('target', '_blank');

//console.log(links);

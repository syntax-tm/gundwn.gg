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
import samsung from './img/samsung.png';
import samsung2 from './img/samsung_light.png';
import './css/style.css';
import 'particles.js';
import $ from 'jquery';
const particlesJson = require('./config/particles.json');
import links from './config/links.json';

particlesJS('background', particlesJson);

$('#pcpartpicker').attr('src', pcpartpicker);
$('#pcpartpicker').attr('title', 'PC Part Picker');
$('#cpu').attr('src', amd);
$('#cpu').attr('title', 'AMD');
$('#psu').attr('src', corsair);
$('#psu').attr('title', 'Corsair');
$('#display').attr('src', samsung);
$('#display').attr('title', 'Samsung');
$('#mobo').attr('src', asusRog);
$('#mobo').attr('title', 'ASUS RoG');
$('#gpu').attr('src', nvidia);
$('#gpu').attr('title', 'NVidia');
$('#keyboard').attr('src', leopold);
$('#keyboard').attr('title', 'Leopold');
$('#ram').attr('src', gskill);
$('#ram').attr('title', 'GSkill');
$('#headset').attr('src', astro);
$('#headset').attr('title', 'Astro');
$('#mouse').attr('src', corsair);
$('#mouse').attr('title', 'Corsair');
$('#speakers').attr('src', logi);
$('#speakers').attr('title', 'Logi');
$('#kvm').attr('src', kvm);
$('#kvm').attr('title', 'KVM');
$('#storage').attr('src', samsung);
$('#storage').attr('title', 'Samsung');
$('#chair').attr('src', corsair);
$('#chair').attr('title', 'Corsair');
$('#desk').attr('src', desk);
$('#desk').attr('title', 'Desk');

$('.profile-image').attr('src', p);
$('#footer-image').attr('src', h3);

$('.pc-part-name').each(function(index) {
    const el = $(this);
    const val = el.text();

    el.attr('title', val);

    console.log(val);
});

$('a').attr('target', '_blank');

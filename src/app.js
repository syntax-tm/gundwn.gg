import p from './img/pikachu.gif';
import p_sq from './img/pikachu_sq.gif';
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
import menuConfig from './config/menu.json';

particlesJS('background', particlesJson);

$('meta[property="og:image"]').attr('content', p);
$('meta[property="twitter:image"]').attr('content', p);

$('#profile-image').attr('src', p_sq);
$('#footer-image').attr('src', h3);

function createSubMenuItem(options)
{
    if (options.type === "separator")
    {
        $('<hr/>').appendTo('#pc-submenu');
        return;
    }
    if (options.type === "button")
    {
        var html = `<a href="${options.link}" role="btn" height="auto" class="text-decoration-none">
            <button>
                <div class="d-flex align-content-center align-items-center w-100 justify-content-center" style="text-align: center; align-self: center; align-items: center;">
                <!-- <img id="pcpartpicker" class="object-fit-scale" style="width: 35px; height: 35px;"></img> -->
                <i class="fa-solid fa-external-link m-2"></i>
                <div style="">View On PC Part Picker</div>
                </div>
            </button>
        </a>`;

        $(html).appendTo('#pc-submenu');
        return;
    }

    var html = `<button class="btn-submenu">
                    <img id="${options.id}" class="btn-image list-item-btn-image object-fit-scale"></img>
                    <div class="vr1"></div>
                    <div class="category">${options.shortCategory}</div>
                    <div class="vr"></div>
                    <div class="flex-grow-1 pc-part-name" title="${options.description}">${options.description}</div>
                </button>`;

    $(html).appendTo('#pc-submenu');
}

var items = menuConfig.menu[0].items;

items.forEach(function (item) {
    createSubMenuItem(item);
});

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

$('a').attr('target', '_blank');

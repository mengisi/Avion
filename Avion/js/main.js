'use strict';

var count = 0;
var timerMenu = null;
var showHideCount = 0;

window.onload = start;
function start() {
    create_city_tb();
    rouler_photo();
}

function create_city_tb() {
    for (var i = 0; i < cities_tb.length; i++) {
        document.getElementById("city_leaving").innerHTML += '<option value="' + cities_tb[i].name + '">' + cities_tb[i].name + '</option>';
        document.getElementById("destination").innerHTML += '<option value="' + cities_tb[i].name + '">' + cities_tb[i].name + '</option>';
    }
}

function rouler_photo() {
    if (count == 4) {
        count = 0
    }
    count++;
    document.getElementById('photo').src = 'img/' + count + '.jpg';
    setTimeout(rouler_photo, 2500);
}


function afficher_menu() {
    showHideCount++;
    console.log('afficher : ', showHideCount);
    if (null != timerMenu) {
        clearTimeout(timerMenu);  // Cancel timer
        timerMenu = null;
    }
    document.getElementById('menu_cache').style.visibility = 'visible';
}

function cacher_menu() {
    showHideCount--;
    console.log('cacher : ', showHideCount);
    if ((null == timerMenu) && (0 == showHideCount)) {
        timerMenu = setTimeout(function () {
            document.getElementById('menu_cache').style.visibility = 'hidden';
        }, 2000);
    }
}

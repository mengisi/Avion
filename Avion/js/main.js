'use strict';

var count = 0;
var timerMenu = null;

window.onload = start;
function start() {
    create_leaving_city();
    rouler_photo();
}

function create_leaving_city(){
    for (var i = 0; i < cities_tb.length; i++) {
        document.getElementById("city_leaving").innerHTML += '<option value="' + cities_tb[i].name + '">' + cities_tb[i].name + '</option>';
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
    console.log('afficher');
    if (null != timerMenu) {
        clearTimeout(timerMenu);  // Cancel timer
        timerMenu = null;
    }
    document.getElementById('menu_cache').style.visibility = 'visible';
    //mouse.nextElementSibling.style.visibility = 'visible';
}

function cacher_menu() {
    console.log('cacher');
    // mouse.style.visibility = 'hidden';
    if (null == timerMenu) {
        timerMenu = setTimeout(function () {
            document.getElementById('menu_cache').style.visibility = 'hidden';
        }, 500);
    }

}

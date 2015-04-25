'use strict';

var count = 0;
var timerMenu = null;
var showHideCount = 0;

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

window.onload = function () {
    $('#mydate').glDatePicker();
    $('#mydate2').glDatePicker();
    create_city_tb();
    rouler_photo();
    console.log(getParameterByName('city_depart'));

};

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


function afficher()
{
    document.getElementById('menu_a_cacher').style.display="block";
}
function cacher()
{
    document.getElementById('menu_a_cacher').style.display="none";
}


function acheter_ticket() {
    var city_depart = document.getElementById('city1').value;
    var city_destine = document.getElementById('city2').value;
    var date_d = document.getElementById('mydate').value;
    console.log(date_d);
    var date_r = document.getElementById('mydate2').value;
    console.log(date_r);
    var date_depart_aux= date_d.split('/');
    var date_return_aux=date_r.split('/');
    var date_depart= new Date(date_depart_aux[2],date_depart_aux[0],date_depart_aux[1]-1);
    console.log(date_depart);
    var date_return= new Date(date_return_aux[2],date_return_aux[0],date_return_aux[1]-1);
    console.log(date_return);
    var prix_total=0;
    var persons=document.getElementById('people').value;
    console.log(persons);
    for (var i = 0; i < cities_tb.length; i++) {
        if (cities_tb[i].name == city_depart) {
            var prix_base = cities_tb[i].value;
        }
    }
    console.log(prix_base);

    if (date_depart < date_return) {
        console.log(date_depart);
        var date_aux = date_return - date_depart;
        console.log(date_aux);
        console.log(date_aux);
        var days = (((date_aux / 1000) / 60) / 60) / 24;
        console.log('days:', days);
    } else {
        console.log('Date not valide');
    }
    if(12>= (date_depart_aux[1]-1)>6){
        prix_total=(days*0.08*prix_base);
        prix_total=prix_total.toFixed(2);
        console.log("prix total s/w:", prix_total);
        }else{
        prix_total=(days*0.1*prix_base);
        prix_total=prix_total.toFixed(2);
        console.log("prix total j/j:", prix_total);
        }
    var URL = 'formulaire.html';
    URL += '?';
    URL += 'city_depart=' + city_depart;
    URL += '&city_destine=' + city_destine;
    URL += '&date_depart=' + date_depart;
    URL += '&date_return=' + date_return;
    URL += '&persons=' + persons;
    URL += '&prix_total=' + prix_total;
    
    //URL = encodeURIComponent(URL);
    window.open(URL);
}



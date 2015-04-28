
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
        count = 0;
    }
    count++;
    document.getElementById('photo').src = 'img/' + count + '.jpg';
    setTimeout(rouler_photo, 2500);
}


function afficher(div){
	div.lastElementChild.style.display="block";
}
function cacher(div){
	div.lastElementChild.style.display="none";
}
 
function activer_go(){
	var activer=true;
	var all_inputs= document.getElementsByTagName('INPUT');
	for (var i=0; i<all_inputs.length-1;i++){
		if(''=== all_inputs[i].value){
			activer=false;
			break;
		}
	}
	document.getElementById('go').disabled = !activer;
	return activer;
}

function acheter_ticket() {
    var city_depart = document.getElementById('city1').value;
    var city_destine = document.getElementById('city2').value;
    var date_d = document.getElementById('mydate').value;
    var month_departure = mydate.getMonth();
    console.log("mes de partida", month_departure);
    var date_r = document.getElementById('mydate2').value;
    var month_return = date_r.getMonth();//I don't know how to get the month in another way
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
    if( 12> month_departure >6){ // I need the month
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
    URL += '&date_d=' + date_d;
    URL += '&date_r=' + date_r;
    URL += '&persons=' + persons;
    URL += '&prix_total=' + prix_total;
    
    window.open(URL);
}


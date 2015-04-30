'use strict';

var count = 0;

window.onload = function () {
    $('#mydate').glDatePicker();
    $('#mydate2').glDatePicker();
    create_city_tb();
    rouler_photo();
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


function afficher(div) {
    div.lastElementChild.style.display = "block";
}
function cacher(div) {
    div.lastElementChild.style.display = "none";
}

function activer_go() {
    var activer = true;
    var all_inputs = document.getElementsByTagName('INPUT');
    console.log(all_inputs);
    for (var i = 0; i < all_inputs.length - 1; i++) {
        console.log(all_inputs[i].value);
        if ('' === all_inputs[i].value) {
            activer = false;
            break;
        }
    }
    document.getElementById('go').disabled = !activer;
    return activer;
}

function acheter_ticket() {
    var city_depart = document.getElementById('city1').value;
    var city_destine = document.getElementById('city2').value;

    var dd_origne = document.getElementById('mydate').value;
    var rr_origne = document.getElementById('mydate2').value;
    var dd, rr, dd_output, rr_output;
    if (dd_origne.indexOf('/') > -1) {
        var dd_origne_tableau = dd_origne.split('/');
        var rr_origne_tableau = rr_origne.split('/');
        dd = new Date(dd_origne_tableau[2], dd_origne_tableau[1] - 1, dd_origne_tableau[0]);
        rr = new Date(rr_origne_tableau[2], rr_origne_tableau[1] - 1, rr_origne_tableau[0]);
        dd_output = dd_origne_tableau[2] + '-' + dd_origne_tableau[1] + '-' + dd_origne_tableau[0];
        rr_output = rr_origne_tableau[2] + '-' + rr_origne_tableau[1] + '-' + rr_origne_tableau[0];
    } else {
        dd_output = document.getElementById('mydate').value;
        rr_output = document.getElementById('mydate2').value;
        dd = new Date(dd_output);
        rr = new Date(rr_output);
    }
    console.log(dd);
    console.log(rr);
    var prix_total = 0;
    var persons = document.getElementById('people').value;
    console.log(persons);
    for (var i = 0; i < cities_tb.length; i++) {
        if (cities_tb[i].name == city_depart) {
            var prix_base = cities_tb[i].value;
            console.log("price base:", prix_base);
        }
    }
    console.log(prix_base);

    if (dd < rr) {
        var date_dd_rr = rr.getTime() - dd.getTime();
        var jours = (((date_dd_rr / 1000) / 60) / 60) / 24;
        console.log(jours);

    }

    console.log("comparation:", dd < rr);

    var month_dep = dd.getMonth();
    console.log("month departure", month_dep);
    if (12 > (month_dep + 1) && (month_dep + 1) > 6) {
        prix_total = parseFloat((jours * 0.08 * prix_base));
        prix_total = prix_total.toFixed(2);
        console.log("prix total s/w:", prix_total);
    } else {
        prix_total = parseFloat((jours * 0.1 * prix_base));
        prix_total = prix_total.toFixed(2);
        console.log("prix total j/j:", prix_total);
    }

    if (dd < rr){
    var URL = 'formulaire.html';
    URL += '?';
    URL += 'city_depart=' + city_depart;
    URL += '&city_destine=' + city_destine;
    URL += '&date_d=' + dd_output;
    URL += '&date_r=' + rr_output;
    URL += '&persons=' + persons;
    URL += '&prix_total=' + prix_total;
    window.open(URL);
} else {
        alert('Date not valide');
    }
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

var personnes_travel;
window.onload = function () {
    //  console.log(getParameterByName('city_depart'));
    var city_depart_b = getParameterByName('city_depart');
    var city_destine_b = getParameterByName('city_destine');
    var date_depart_b = getParameterByName('date_d');
    var date_return_b = getParameterByName('date_r');
    var persons_b = getParameterByName('persons');
    var prix_total_b = getParameterByName('prix_total');

    personnes_travel = persons_b;

    document.getElementById('result').innerHTML = '<td>' + city_depart_b + '</td><td>' + city_destine_b + '</td><td>' + date_depart_b + '</td><td>' + date_return_b + '</td><td>' + persons_b + '</td><td>' + prix_total_b + '$</td>';

};

function afficher(div) {
    div.lastElementChild.style.display = "block";
}
function cacher(div) {
    div.lastElementChild.style.display = "none";
}


function confirmer() {
    var inputs = document.getElementsByTagName('input');
    var alarm = [];
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length < 1) {
            document.getElementsByTagName('input')[i].style.backgroundColor = 'hotpink';
            alarm.push(i);
        }
    }
    if (alarm.length > 0) {
        alert('Remplir tous les champs');
    } else {
        var URL = 'seat.html';
        URL += '?';
        URL += '&persons_b=' + personnes_travel;
        window.open(URL);
    }
}


function check_input(col_input) {
    console.log(col_input.style.backgroundColor);
    if (((col_input.style.backgroundColor == 'rgb(255, 105, 180)')||(col_input.style.backgroundColor=='hotpink')) && (col_input.value.length > 1)) {
        col_input.style.backgroundColor = 'white';
    }
}
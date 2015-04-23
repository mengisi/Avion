
'use strict';

cities();
function cities(city_leaving) {
    for (var i = 0; i < cities.length; i++) {
        document.getElementById("city_leaving").innerHTML += '<option>' + cities_tb[i].value;
    }
}

    function search(city) {
        var villes = ['Montréal', 'Québec', 'Rio', 'New-York', 'Tokyo', 'Paris', 'London', 'Bombay', 'Berlin', 'Cairo'];
        var keyword = city.value.toLowerCase();
        var result = '';
        if (keyword != '') {
            for (var i = 0; i < villes.length; i++) {
                var position = villes[i].toLowerCase().indexOf(keyword);
                var surligne1, surligne2, surligne3;
                if (position > -1) {
                    surligne1 = villes[i].substring(0, position);
                    surligne2 = '<mark>' + villes[i].substr(position, keyword.length) + '</mark>';
                    surligne3 = villes[i].substr(position + keyword.length);
                    result = result + '<li >' + surligne1 + surligne2 + surligne3 + '</li>';
                }
            }
        }

        document.getElementById('leave_city').innerHTML = '<ul>' + result + '</ul>';
    }

    var count = 0;
    var timer = photo();

    function photo() {
        if (count == 4) {
            count = 0
        }
        count++;
        document.getElementById('photo').src = 'img/' + count + '.jpg';
        setTimeout(photo, 2500);
    }





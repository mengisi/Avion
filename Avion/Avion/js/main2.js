
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


window.onload = function () {
    console.log(getParameterByName('city_depart'));
    var city_depart_b=getParameterByName('city_depart');
    var city_destine_b=getParameterByName('city_destine');
    var date_depart_b=getParameterByName('date_d');
    var date_return_b=getParameterByName('date_r');
    var persons_b=getParameterByName('persons');
    var prix_total_b=getParameterByName('prix_total');

    document.getElementById('result').innerHTML='<td>'+city_depart_b+'</td><td>'+city_destine_b+'</td><td>'+date_depart_b+'</td><td>'+date_return_b+'</td><td>'+persons_b+'</td><td>'+prix_total_b+'$</td>';

};

function afficher(div){
	div.lastElementChild.style.display="block";
}
function cacher(div){
	div.lastElementChild.style.display="none";
}




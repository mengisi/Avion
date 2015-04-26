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
    document.getElementById('lf').value =city_depart_b;
	console.log(city_depart_b);
	document.getElementById('ft').value =city_destine_b;
	console.log(city_destine_b);
	document.getElementById('dd').value =date_depart_b;
	console.log(date_depart_b);
	document.getElementById('da').value =date_return_b;
	console.log(date_return_b);
	document.getElementById('np').value =persons_b;
	console.log(persons_b);
	document.getElementById('per').value =prix_total_b;
	console.log(prix_total_b);
};






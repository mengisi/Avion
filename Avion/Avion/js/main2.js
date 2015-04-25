function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

window.onload = function () {
    console.log(getParameterByName('city_depart'));
    var city_depart_b=getParameterByName('city_depart');
    var city_destine_b=getParameterByName('city_destine');
    var date_depart_b=getParameterByName('date_depart');
    var date_return_b=getParameterByName('date_return');
    var persons_b=getParameterByName('persons');
    var prix_total_b=getParameterByName('prix_total');
};

function give_values(){
	var city_depart_b=getParameterByName('city_depart');
    var city_destine_b=getParameterByName('city_destine');
    var date_depart_b=getParameterByName('date_depart');
    var date_return_b=getParameterByName('date_return');
    var persons_b=getParameterByName('persons');
    var prix_total_b=getParameterByName('prix_total');
	
	document.getElementById('lf').innerHTML =city_depart_b;
	console.log(city_depart_b);
	document.getElementById('ft').innerHTML =city_destine_b;
	console.log(city_destine_b);
	document.getElementById('dd').innerHTML =date_depart_b;
	console.log(date_depart_b);
	document.getElementById('dr').innerHTML =date_return_b;
	console.log(date_return_b);
	document.getElementById('np').innerHTML =persons_b;
	console.log(persons_b);
	document.getElementById('per').innerHTML =prix_total_b;
	console.log(prix_total_b);
	
}




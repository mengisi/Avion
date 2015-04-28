
'use strict';
window.onload=initialiser();
    function initialiser() {
        var latlng = new google.maps.LatLng(45.5440916, -73.6402476);
        var options = {
            center: latlng,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var carte = new google.maps.Map(document.getElementById("carte"), options);
        var marqueur = new google.maps.Marker({
            position: new google.maps.LatLng(45.5440916, -73.6402476),
            map: carte
        });
    }

function afficher(div){
	div.lastElementChild.style.display="block";
}
function cacher(div){
	div.lastElementChild.style.display="none";
}
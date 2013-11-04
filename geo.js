function inicia(){
	var boton=document.getElementById('oUbi');
		boton.addEventListener('click', obtener, false);
}
function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar);
}

function mostrar(posicion){

var latitud='Latitud: '+posicion.coords.latitude+'<br>';
var longitud='Longitud: '+posicion.coords.longitude+'<br>';
var instante = 'Instante: '+new Date(posicion.timestamp)+'<br>';
document.getElementById('mosUbi').innerHTML=latitud+longitud+instante;
}



window.addEventListener('load', inicia, false);
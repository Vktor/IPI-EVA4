function inicia(){
	var boton=document.getElementById('oUbi');
	boton.addEventListener('click', obtener, false);
}
function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar);
}
function mostrar(posicion2){
	var ubicacion=document.getElementById('Gmapa');
	var mapurl='http://maps.google.com/maps/api/staticmap?center='+
		posicion2.coords.latitude+','+posicion2.coords.longitude+'&zoom=16&size=400x400&sensor=false&markers='+posicion2.coords.latitude+','+posicion2.coords.longitude;
    ubicacion.innerHTML='<img src="'+mapurl+'">';
}

window.addEventListener('load', inicia, false);		
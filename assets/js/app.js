/*$(document).ready(function() {	
}); - Modo antiguo de realizarlo -*/

var idPin = 0;

$(document).ready(() => { //prepara el documento para que pase algo. No es necesario meter todo adentro. Sino que el documento este preparado.
	//codigo a ejecutar.
});

function savePin(){
	var titulo = $("#tituloInput").val(); // rescatar valor del titulo con el ID
	var descripcion = $("#descripcionInput").val(); // rescatar valor de la descripción con el ID
	var url = $("#urlInput").val(); // rescatar valor del url con el ID

	$("#pines").append("<div id='pin_" + idPin + "' class='pin col-md-3'>" +
		//Este es el frente
		"<div class='panel panel-success front'>" +
		"<div class='panel-heading'>" +
		"<h3 class='panel-title'>" + titulo + "</h3>" +
		"</div>" +
		"<div class='panel-body'>" +
		"<a href='#' class='thumbnail'>" +
		"<img src='" + url + "' alt='...'>" +
		"</a>" +
		"</div>" +
		"<div class ='panel-footer'>" + descripcion + "</div> </div>" +
		//este es el panel de atrás
		"<div clas='rear'>" +
		"</div>" +
		"</div>");

};
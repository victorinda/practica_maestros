function changeImg() {
	let select= document.getElementById("teachers");
	let seleccion = select.value
	document.getElementById("imagen").src="img/imagen"+seleccion+".jpg";
}
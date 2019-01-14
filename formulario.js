window.onload=iniciar;
fuction iniciar(){
	document.getElementById('enviar').addEventListener('click',validar,false);
}

fuction validarNombre(){
	var elemento=document.getElementById=("nombre");
	if(!elemento.checkValidity()){
		error(elemento);
		return false;
	}
	return false;
}



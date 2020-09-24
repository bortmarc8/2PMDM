function pedir_input() {
	let input = prompt("Introduce un número");
	return par_impar(input);
}

function par_impar() {
	let input = pedir_input();
	if ((input % 2) == 0) {
		console.log("Es par");
	}else{
		console.log("Es impar");
	}
}
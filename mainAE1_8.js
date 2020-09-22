function validar(input){
	if (input <= 12 && input >= 1) {return false}else{return true}
}

salir = false
do {
  readline.question('Escribe un número', num => {
  if (validar(${num}))
  	{
  	salir = true
  	}
  else
  	{
  	salir = false
  	}
  }} while (!salir);
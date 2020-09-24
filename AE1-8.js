let salir = false;
let input;
let numSuerte = Math.floor(Math.random() * 12) + 1  
do {
  input = prompt("Introduce un número de 1 a 12");
  if (input <= 12 && input >= 1)
  {
    salir = true;

    if (input == numSuerte)
    {
      console.log("Felicidades, has acertado");
    }
    else
    {
      console.log("No has acertado, el número era " + numSuerte + " más suerte en la proxima");
    }
  }
  else
  {
    alert("El número introducido no está dentro del rango especificado");
  }
} while (!salir);
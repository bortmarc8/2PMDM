// Ejercicio hecho con la ayuda de Jose Lacueva
let arrayMinimum = [4,6,8,10,2,12,14,16,18,20];
findMinimum = (values) => values.reduce((i, j) => i = ( i < j ) ? i : j);
//No conocía el var = (var condition var) ? var : var
console.log(findMinimum(arrayMinimum));
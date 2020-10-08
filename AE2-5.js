let arrayFactorial = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
multipleFactorial = (values) => values.map(calc = (j) => { for (let i = j - 1; i >= 1; i--) { j = j * i } return j });
console.log(multipleFactorial(arrayFactorial));
let arrayGreaterThan = [4,6,8,10,12,14,16,18,20];
findGreaterThan = (x,values) => values.every(j => j > x);
console.log(findGreaterThan(1,arrayGreaterThan));


let dataArray = [2,4,6,8,10,12,14,16,18,20];
average = (dataArray) => dataArray.reduce((i, j) => i + j) / dataArray.length;
console.log(average(dataArray));
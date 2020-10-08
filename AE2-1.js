let array = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];

function removeText(array)
{
    let newArray = array.filter(word => typeof word == "string");
    console.log(newArray);
    return newArray;
}

function removeOdd(array){
    let newArray = array.filter(number => number % 2);
    console.log(newArray);
    return newArray;
}

removeText(array);
removeOdd(array);

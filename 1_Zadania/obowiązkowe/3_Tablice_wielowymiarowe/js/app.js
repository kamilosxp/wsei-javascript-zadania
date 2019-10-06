
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


//Zadanie 0 Sprawdzanie tablicy wielowymiarowej  (~ 10min - 15min)

newArray = [];

function checkArray(array)
{
    for(var i=0; i < array.length; i++) {
        if(array[i,0] % 2 == 0 && array[i,1] % 2 == 0)
            newArray.push(true);
            else
            newArray.push(false);
    }
}

console.log(newArray);
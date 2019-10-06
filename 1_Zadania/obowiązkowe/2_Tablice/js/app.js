// //Zadanie 0 Znajdź róźnice  (~ 10min - 15min)

// sum = 0;
// avg = 0;

// arr = [];

// function distFromAverage(param)
// {
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i];
//       }
      
//       avg = sum / array.length; 

//       for(var l=0; l < array.length; l++) {
//         outputArray.push(Math.abs(avg - arr[l]));
//       }
// }

// //Zadanie 1 (~ 5min - 10 min)

// var fruits = ["Jablko", "Truskawka", "Banan"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// for(var i =0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//Zadanie 2 (~ 5min - 10 min)

// function createArray(number) {
//     var newArray = [number];

//     for (var counter = 1; ; counter <= number) {
//         newArray.push(counter);
//     }

//     return newArray[number];
// }

//Zadanie 3 (~ 5min - 10 min)

// function printTable(array) {

//     for(var i=0; i < array.lenght; i++)
//     {
//         console.log(i);
//     }
// }

//Zadanie 4 (~ 10min - 15 min)


// sum = 0;

// function multiply(array) {
//     sum = array[0];

//     for(var i=1; i <array.lenght; i++) {
//         sum *= array[i];
//     }
//     console.log(sum);
// }
// multiply([1,2,3,4,5,6,7]);

//Zadanie 5 (~ 10min - 15 min)

// avg = 0;
// amt = 0;

// function getEvenAvarage(array) {
//     for(var i=0; i < array.lenght; i++) {
//         if(array[i]%2 == 0)
//         {
//             amt = amt +1;
//             avg += array[i];
//         }
//     }

//     if(amt!=0)
//         return avg / amt;
//     else
//         return null;
// }

// console.log(getEvenAvarage([1,2,3,4,5,6,7]));


//Zadanie 6  (~ 15min - 20 min)

function sortArray(array) {
    console.log(array.sort());
}

sortArray([145,11,3,64,4,6,10]);
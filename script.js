// Coding challenge #1: Print numbers from 1 to 10

// for (let i = 1; i < 11; i++){
//     console.log(i)
// }

// Coding challenge #2: Print the odd numbers less than 100

// for (let i = 1; i < 100; i += 2){
//     console.log(i)
// }

// Coding challenge #3: Print the multiplication table with 7

// for(i=1; i<11; i++){
//     console.log("7 x " + i + " = " + 7*i)
// }

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

// for (i=1; i<11; i++){
//     for(j=1; j<11; j++){
//         console.log( i + " x " + j + " = " + i*j)
//     }
// }

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

// let sum = 0;
// for ( i = 1; i < 11; i++) {
//     sum += i
    
// }
// console.log(sum)

// Coding challenge #6: Calculate 10!

// for(i=0; i <10; i++){
//     if(i + 8 === 10){
//         console.log(i + 8, " , i = " + i)
//     }
// }

// let a = 5;
// let b = 2.5;
// let ten = a + (b*2);
// console.log(ten)


// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;
// for (i=11; i < 30; i += 2){
//     sum += i;
// }
// console.log(sum);
// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

// multiply by 1.8 then add 32

// let tempC = process.argv[2];

// let tempF = (tempC * 1.8) + 32;

// console.log(tempF);

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

// let tempF = process.argv[2];
// let tempC = ((tempF - 32) / 1.8).toFixed(2);

// console.log(tempC);

// Coding challenge #10: Calculate the sum of numbers in an array of numbers

// let numArray = [1,2,3,4,5,6,7];
// let arraySum = 0;
// for (i= 0; i<numArray.length + 1; i++){
//     arraySum += i;
// }
// console.log(arraySum);

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

// let array= [1,3,5,7,-2,14,100, -1888];
// let sum=0;
// for ( let i = 0; i < array.length; i ++ ) {
//     sum += array[i];
// }
// let average = sum/(array.length + 1) ;
// console.log(array.length, sum, average)

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function removeNegative(arr){
//     let newArray= [];
//     for ( let i = 0; i< arr.length; i++ ){
//         if(arr[i] >= 0){
//             newArray.push(arr[i])
//         }
//     }
//     console.log(newArray, arr)
// }

// let arr = [-1,2,4,-5, 89, -1, 0, .45, -348.3]
// removeNegative(arr)


// Coding challenge #13: Find the maximum number in an array of numbers

newArray = [1,2,3,4,5,6,34,345,3346,1,234,543,-234];

let max = newArray[0];

for (let i=0; i< newArray.length; i ++ ){
    
    if(newArray[i] > max){
        max = newArray[i]
    }
    
}console.log(max)

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

let f1 = 0;
let f2 = 1;
for (let i = 2; i < 10; i++ ){
    console.log(f1);
    console.log(f2);
    f1 = f2;
    f2= f1 + i;
}


// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion


// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

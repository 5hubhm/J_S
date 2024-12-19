// console.log("A-1). Write a program to check is a given number is even or odd")
// let x = window.prompt("Enter a number")
// if (x%2==0)
//     console.log(`{x} is even`)
// else
//     console.log(`{x} is odd`)    

// console.log("A-2). positive, negative or zero")
// let x = window.prompt("Enter a number")
// if (x<0)
//     console.log(`{x} is negative`)
// else if(x==0)
//     console.log(`{x} is zero`)
// else
//     console.log(`{x} is positive`)

// console.log("A-3). Write a program to calculate the sum of the first N natural numbers")
// let x = window.prompt("Enter a number")
// let res = (x * (x-1))/2
// console.log(`${res}`)

// console.log("A-4). Write a program to calculate the factorial of a given number")
// let x = window.prompt("Enter a number")
// let res = 0
// for(let i=0; i<=x; i++)
//     res += i
// console.log(`${res}`)

// console.log("A-5). Write a program to find factors of a given number");

// let num = parseInt(window.prompt("Enter a number"), 10);
// if (isNaN(num) || num <= 0) {
//     console.log("Please enter a positive number.");
// } else {
//     console.log(`Factors of ${num} are:`);
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) console.log(i);
//     }
// }


// console.log("A-6). Write a program to check if an input number is prime or not");

// let n = parseInt(window.prompt("Enter a number"), 10);
// if (isNaN(n) || n <= 1) {
//     console.log("Enter a number greater than 1.");
// } else {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     console.log(`${n} is ${isPrime ? "a prime number" : "not a prime number"}`);
// }


// console.log("A-7). Write a program to generate the Fibonacci sequence up to a given number of terms");

// let terms = parseInt(window.prompt("Enter the number of terms"), 10);
// if (isNaN(terms) || terms <= 0) {
//     console.log("Please enter a positive number.");
// } else {
//     let fib = [0, 1];
//     for (let i = 2; i < terms; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     console.log(`The first ${terms} terms of the Fibonacci sequence are: ${fib.slice(0, terms).join(", ")}`);
// }


// console.log("A-8). Write a program to check if an input string is a palindrome");

// let str = window.prompt("Enter a string");
// let reversedStr = str.split("").reverse().join("");
// console.log(`${str} is ${str === reversedStr ? "a palindrome" : "not a palindrome"}`);

// console.log("A-9). Write a program to find the sum of digits of an input number");

// let number = parseInt(window.prompt("Enter a number"), 10);
// if (isNaN(number) || number < 0) {
//     console.log("Please enter a non-negative number.");
// } else {
//     let sum = number.toString().split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
//     console.log(`The sum of the digits of ${number} is ${sum}`);
// }


// console.log("A-10). Write a program to check if an input number is an Armstrong number");

// let armNum = parseInt(window.prompt("Enter a number"), 10);
// if (isNaN(armNum) || armNum < 0) {
//     console.log("Please enter a non-negative number.");
// } else {
//     let sum = armNum.toString().split("").reduce((acc, digit) => acc + Math.pow(parseInt(digit, 10), armNum.toString().length), 0);
//     console.log(`${armNum} is ${armNum === sum ? "an Armstrong number" : "not an Armstrong number"}`);
// }


// console.log("A-11). Write a program to check if an input year is a leap year");

// let year = parseInt(window.prompt("Enter a year"), 10);
// if (isNaN(year)) {
//     console.log("Please enter a valid year.");
// } else {
//     let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     console.log(`${year} is ${isLeap ? "a leap year" : "not a leap year"}`);
// }


// console.log("A-12). Write a program to find the greatest common divisor (GCD) of two input numbers");

// let a = parseInt(window.prompt("Enter the first number"), 10);
// let b = parseInt(window.prompt("Enter the second number"), 10);

// function gcd(x, y) {
//     return y === 0 ? x : gcd(y, x % y);
// }

// console.log(`The GCD of ${a} and ${b} is ${gcd(a, b)}`);


// console.log("A-13). Write a program to find the least common multiple (LCM) of two input numbers");

// let num1 = parseInt(window.prompt("Enter the first number"), 10);
// let num2 = parseInt(window.prompt("Enter the second number"), 10);

// function gcd(x, y) {
//     return y === 0 ? x : gcd(y, x % y);
// }

// let lcm = (num1 * num2) / gcd(num1, num2);
// console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);


console.log("A-14). Write a program to check if two strings are anagrams");

let str1 = window.prompt("Enter the first string").toLowerCase();
let str2 = window.prompt("Enter the second string").toLowerCase();

function sortString(s) {
    return s.split("").sort().join("");
}

console.log(`${str1} and ${str2} are ${sortString(str1) === sortString(str2) ? "anagrams" : "not anagrams"}`);

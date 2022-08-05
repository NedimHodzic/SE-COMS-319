let scanner = require('readline-sync');

let num1 = scanner.question('Enter 1st Number: ');
let num2 = scanner.question('Enter 2nd Number: ');
let num3 = scanner.question('Enter 3rd Number: ');
let num4 = scanner.question('Enter 4th Number: ');

let i = 0;
for(i = num1 - 1; i > 0; i--) {
    num1 *= i;
}

let digitsNum2 = num2.toString().split('');
let sumNum2Digits = 0;
for(i = 0; i < digitsNum2.length; i++) {
    sumNum2Digits += parseInt(digitsNum2[i]);
}

let digitsNum3 = num3.toString().split('');
let num3Backwards = "";
for(i = digitsNum3.length - 1; i >= 0; i--) {
    num3Backwards += digitsNum3[i];
}

let num4String = num4.toString();
let digitsNum4 = num4String.split('');
let num4Backwards = "";
let isPalindrome = false;
for(i = digitsNum4.length - 1; i >= 0; i--) {
    num4Backwards += digitsNum4[i];
}
if(num4Backwards === num4String) {
    isPalindrome = true;
}

console.log("Factorial of the first 1st number is = " + num1);
console.log("The sum of all digits of the 2nd number is = " + sumNum2Digits);
console.log("The reverse of the 3rd number is = " + num3Backwards);
console.log("Is the 4th number a palindrome (True/False)? " + isPalindrome);
// // ********************** 1. Find the Maximum of Three Numbers

// function maxOfThree(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// // Test cases
// console.log(maxOfThree(2, 3, 4)); // 4
// console.log(maxOfThree(2, 6, 4)); // 6
// console.log(maxOfThree(8, 3, 4)); //8

// // ********************** 2. Check if a Number is Positive, Negative, or Zero
// function checkNumber(num) {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// // Test cases
// console.log(checkNumber(5)); // Positive
// console.log(checkNumber(-3)); // Negative
// console.log(checkNumber(0)); // Zero

// // ********************** 3. Calculate Electricity Bill

// function calculateBill(unit) {
//   let bill = 0;
//   if (unit < 1) {
//     return 0;
//   }
//   if (unit <= 100) {
//     bill = unit * 5;
//   } else if (unit <= 200) {
//     bill = 100 * 5 + (unit - 100) * 7;
//   } else {
//     bill = 100 * 5 + 100 * 7 + (unit - 200) * 10;
//   }
//   return bill;
// }

// // Test cases
// console.log(calculateBill(350)); // 2700
// console.log(calculateBill(250)); // 1700
// console.log(calculateBill(150)); // 850
// console.log(calculateBill(50)); // 250
// console.log(calculateBill(-10)); // 0

// // ********************** 4. Check if a Character is a Vowel or Consonant
// function checkCharacter(char = "") {
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(char.toLowerCase())) {
//     return "vowel";
//   } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//     return "consonant";
//   } else {
//     return "Not a valid alphabet character";
//   }
// }

// // Test cases
// console.log(checkCharacter("a")); // vowel
// console.log(checkCharacter("b")); // consonant
// console.log(checkCharacter("c")); // consonant
// console.log(checkCharacter("x")); // consonant
// console.log(checkCharacter("u")); // vowel
// console.log(checkCharacter("1")); // Not a valid alphabet character
// console.log(checkCharacter("")); // Not a valid alphabet character
// console.log(checkCharacter()); // Not a valid alphabet character

// // ********************** 5. Check if a Year is a Leap Year
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   }
//   return false;
// }

// // Test cases
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2021)); // false
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true

// // ********************** 6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// function checkCharacterType(char = "") {
//   if (char >= "A" && char <= "Z") {
//     return "Uppercase Letter";
//   } else if (char >= "a" && char <= "z") {
//     return "Lowercase Letter";
//   } else if (char >= "0" && char <= "9") {
//     return "Digit";
//   } else {
//     return "Special Character";
//   }
// }

// // Test cases
// console.log(checkCharacterType("A")); // Uppercase Letter
// console.log(checkCharacterType("m")); // Lowercase Letter
// console.log(checkCharacterType("5")); // Digit
// console.log(checkCharacterType("@")); // Special Character
// console.log(checkCharacterType("z")); // Lowercase Letter
// console.log(checkCharacterType("Z")); // Uppercase Letter

// // ********************** 7. Check Triangle Type Using Sides and Angles

// function checkTriangleType(a, b, c) {
//   if (a === b && b === c) {
//     return "Equilateral";
//   } else if (a === b || b === c || a === c) {
//     return "Isosceles";
//   } else {
//     return "Scalene";
//   }
// }

// // Test cases
// console.log(checkTriangleType(3, 3, 3)); // Equilateral
// console.log(checkTriangleType(3, 4, 4)); // Isosceles
// console.log(checkTriangleType(3, 4, 5)); // Scalene

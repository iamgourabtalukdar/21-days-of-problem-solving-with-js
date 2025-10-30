// ********************************* //
// Code to accept input from the command line in Node.js

import readline from "node:readline";
const rl = readline.createInterface(process.stdin, process.stdout);

function run(question, callback) {
  rl.question(question, (inputStr) => {
    try {
      callback(inputStr);
    } catch (err) {
      console.log(err.message);
    } finally {
      rl.close();
    }
  });
}
// ********************************* //
// ********************* 1. Print Numbers from 1 to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// });

// ********************* 2. Print Numbers from N to 1 without changing the loop condition of above question

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   for (let i = 1; i <= num; i++) {
//     console.log(num - i + 1);
//   }
// });

// ********************* 3. Print All Even Numbers from 1 to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   // way 1
//   for (let i = 2; i <= num; i += 2) {
//     console.log(i);
//   }
//   // way 2
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// });

// ********************* 4. Sum of First N Natural Numbers

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(sum);
// });

// ********************* 5. Product (Factorial) of N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   let fact = 1;
//   for (let i = 2; i <= num; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// });

// ********************* 6. Sum of All Even Numbers up to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   let evenNum = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       evenNum += i;
//     }
//   }
//   console.log(evenNum);
// });

// ********************* 7. Print Squares of Numbers from 1 to N
// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   for (let i = 1; i <= num; i++) {
//     console.log(i ** 2);
//   }
// });

// ********************* 8. Print all numbers divisible by 3 and 5 up to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i);
//     }
//   }
// });

// ********************* 9. Find the sum of all odd numbers up to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   let oddSum = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       oddSum += i;
//     }
//   }
//   console.log(oddSum);
// });

// ********************* 10. Print the cubes of numbers from 1 to N

// run("Enter a number: ", (numStr) => {
//   const num = parseInt(numStr);

//   if (isNaN(num) || !Number.isInteger(num)) {
//     throw new Error("Please Enter a valid Integer");
//   }

//   for (let i = 1; i <= num; i++) {
//     console.log(i ** 3);
//   }
// });

// ********************* 11. Print only the numbers that are both even and perfect squares

run("Enter a number: ", (numStr) => {
  const num = parseInt(numStr);

  if (isNaN(num) || !Number.isInteger(num)) {
    throw new Error("Please Enter a valid Integer");
  }

  for (let i = 2; i * i <= num; i += 2) {
    console.log(i * i);
  }
});

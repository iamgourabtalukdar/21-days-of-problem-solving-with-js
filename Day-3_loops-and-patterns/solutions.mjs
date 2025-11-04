// // 👉 ********************** 1. Print Right-Angled Star Triangle

// function printRightAngleStar(rows) {
//   console.log(`\nPrinting a right angle with ${rows} rows\n`);
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }

// // 🔎 Test cases
// printRightAngleStar(5);
// printRightAngleStar(10);

// // 👉 ********************** 2. Print Inverted Right-Angled Triangle

// function printInvertRightAngleStar(rows) {
//   console.log(`\nPrinting an inverted right angle with ${rows} rows\n`);
//   for (let i = rows; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }

// // 🔎 Test cases
// printInvertRightAngleStar(5);
// printInvertRightAngleStar(10);

// // 👉 ********************** 3. Print Pyramid Pattern

// function printPyramidStar(rows) {
//   console.log(`\nPrinting a pyramid with ${rows} rows\n`);
//   for (let i = 1; i <= rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printPyramidStar(5);
// printPyramidStar(10);

// // 👉 ********************** 4. Print Inverted Pyramid Pattern

// function printInvertedPyramid(rows) {
//   console.log(`\nPrinting an inverted pyramid with ${rows} rows\n`);
//   for (let i = 0; i < rows; i++) {
//     const spacesCount = i;
//     const starCount = 2 * rows - 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printInvertedPyramid(5);
// printInvertedPyramid(10);

// // 👉 ********************** 5. Print Hollow Square Pattern

// function printHollowSquarePattern(rows) {
//   console.log(`\nPrinting a hollow square with ${rows} rows\n`);
//   for (let i = 1; i <= rows; i++) {
//     let printChar = "";
//     for (let j = 1; j <= rows; j++) {
//       if (i === 1 || j === 1 || i === rows || j === rows) {
//         printChar += "*";
//       } else {
//         printChar += " ";
//       }
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printHollowSquarePattern(5);
// printHollowSquarePattern(10);

// // 👉 ********************** 6. Print Hollow Pyramid Pattern

// function printHollowPyramidPattern(rows) {
//   console.log(`\nPrinting a hollow pyramid with ${rows} rows\n`);
//   for (let i = 1; i <= rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       if (j === 1 || j === starCount || i === rows) {
//         printChar += "*";
//       } else {
//         printChar += " ";
//       }
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printHollowPyramidPattern(5);
// printHollowPyramidPattern(10);

// // 👉 ********************** 7. Print Alternating Binary Triangle

// function printAlternatingBinaryTriangle(rows) {
//   console.log(`\nPrinting an alternating binary triangle with ${rows} rows\n`);
//   for (let i = 1; i <= rows; i++) {
//     let digit = i % 2;
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += digit;
//       digit = digit ? 0 : 1;
//     }
//     console.log(str);
//   }
// }

// // 🔎 Test cases
// printAlternatingBinaryTriangle(5);
// printAlternatingBinaryTriangle(10);

// // 👉 ********************** (H.W-1) 8. Print Hollow Inverted Pyramid

// function printHollowInvertedPyramid(rows) {
//   console.log(`\nPrinting an alternating binary triangle with ${rows} rows\n`);
//   for (let i = 0; i < rows; i++) {
//     const spacesCount = i;
//     const starCount = 2 * rows - 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       if (j === 1 || j === starCount || i === 0) {
//         printChar += "*";
//       } else {
//         printChar += " ";
//       }
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printHollowInvertedPyramid(5);
// printHollowInvertedPyramid(10);

// // 👉 ********************** (H.W-2) 9. Print Butterfly Pattern

// function printButterflyPattern(rows) {
//   console.log(`\nPrinting a butterfly pattern with ${rows} rows\n`);
//   const totalRows = 2 * rows;
//   for (let i = 1; i < totalRows; i++) {
//     let printChar = "";
//     for (let j = 1; j < totalRows; j++) {
//       if (i < rows) {
//         //printing upper half
//         if (j <= i || j >= totalRows - i) {
//           printChar += "*";
//         } else {
//           printChar += " ";
//         }
//       } else {
//         //printing lower half
//         if (j >= i || j <= totalRows - i) {
//           printChar += "*";
//         } else {
//           printChar += " ";
//         }
//       }
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printButterflyPattern(5);
// printButterflyPattern(10);

// // 👉 ********************** (H.W-3) 10. Print Diamond Pattern

// function printDiamondPattern(rows) {
//   console.log(`\nPrinting a diamond pattern with ${rows} rows\n`);
//   // printing upper half
//   for (let i = 1; i <= rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
//   // printing lower half
//   for (let i = 1; i < rows; i++) {
//     const spacesCount = i;
//     const starCount = 2 * rows - 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printDiamondPattern(5);
// printDiamondPattern(10);

// // 👉 ********************** (H.W-4) 11. Print Hourglass Pattern

// function printHourGlassPattern(rows) {
//   console.log(`\nPrinting a hour glass pattern with ${rows} rows\n`);
//   // printing upper half

//   for (let i = 0; i < rows; i++) {
//     const spacesCount = i;
//     const starCount = 2 * rows - 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
//   // printing lower half
//   for (let i = 2; i <= rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printHourGlassPattern(5);
// printHourGlassPattern(10);

// // 👉 ********************** (H.W-5) 12. Print Hollow Diamond Pattern

// function printHollowDiamondPattern(rows) {
//   console.log(`\nPrinting a hollow diamond pattern with ${rows} rows\n`);
//   // printing upper half
//   for (let i = 1; i <= rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = 2 * i - 1;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       if (j === 1 || j === starCount) {
//         printChar += "*";
//       } else {
//         printChar += " ";
//       }
//     }
//     console.log(printChar);
//   }
//   // printing lower half
//   for (let i = 1; i < rows; i++) {
//     const spacesCount = i;
//     const starCount = 2 * rows - 2 * i - 1;
//     let printChar = "";
//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       if (j === 1 || j === starCount) {
//         printChar += "*";
//       } else {
//         printChar += " ";
//       }
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printHollowDiamondPattern(5);
// printHollowDiamondPattern(10);

// // 👉 ********************** (H.W-6) 13. Print Rhombus Pattern

// function printRhombusPattern(rows) {
//   console.log(`\nPrinting a rhombus pattern with ${rows} rows\n`);
//   for (let i = 0; i < rows; i++) {
//     const spacesCount = rows - i;
//     const starCount = rows;
//     let printChar = "";

//     for (let j = 1; j <= spacesCount; j++) {
//       printChar += " ";
//     }
//     for (let j = 1; j <= starCount; j++) {
//       printChar += "*";
//     }
//     console.log(printChar);
//   }
// }

// // 🔎 Test cases
// printRhombusPattern(5);
// printRhombusPattern(10);

// 👉 ********************** (H.W-7) 14. Print Multiplication Table (Single and Upto N)

function printMultiplicationTableUptoN(start, end) {
  if (!end) {
    end = start;
  }
  for (let i = start; i <= end; i++) {
    console.log(`\nPrinting multiplication table of ${i}\n`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

// 🔎 Test cases
printMultiplicationTableUptoN(5, 3);
printMultiplicationTableUptoN(10);

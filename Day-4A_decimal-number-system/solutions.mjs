// // 👉 ********************** 1. Split Number into Digits

function numToDigitArr(num) {
  if (num === 0) {
    return [0];
  }
  num = Math.abs(num);
  const digitArr = [];
  while (num > 0) {
    digitArr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return digitArr.reverse();
}

// // 🔎 Test cases
// console.log(numToDigitArr(1234));
// console.log(numToDigitArr(10240));
// console.log(numToDigitArr(0));
// console.log(numToDigitArr(-12));

// // 👉 ********************** 2. Remove the Decimal Point Mathematically

function removeDecimalPoint(num) {
  // check if the number has a decimal part, (n % 1) returns the reminder
  while (num % 1 !== 0) {
    num = num * 10;
  }
  return num;
}

// // 🔎 Test cases
// console.log(removeDecimalPoint(12.34));
// console.log(removeDecimalPoint(0.24));
// console.log(removeDecimalPoint(0));
// console.log(removeDecimalPoint(-12));
// console.log(removeDecimalPoint(-14.58));

// // 👉 ********************** 3. Separate Whole and Fractional Parts of a Number

function getWholeAndFractionalPart(num) {
  const whole = num > 0 ? Math.floor(num) : Math.ceil(num);
  let fraction = num - whole;

  // fixing floating point precision error
  const precision = 1000000000;
  fraction = Math.round(fraction * precision) / precision;
  return { whole, fraction };
}

// // 🔎 Test cases
// console.log(getWholeAndFractionalPart(12.34));
// console.log(getWholeAndFractionalPart(0.24));
// console.log(getWholeAndFractionalPart(0));
// console.log(getWholeAndFractionalPart(-12));
// console.log(getWholeAndFractionalPart(-14.58));

// // 👉 ********************** 4. Count Whole and Fractional Digits Separately

function countWholeAndFractionalDigits(num) {
  function countWholeNumDigits(num) {
    let count = 0;
    num = Math.abs(num);
    while (num > 0) {
      count++;
      num = Math.floor(num / 10);
    }
    return count;
  }

  function countFractionNumDigits(num) {
    while (num % 1 !== 0) {
      num = Number(num * 10).toFixed(10);
    }
    return countWholeNumDigits(num);
  }

  const { whole, fraction } = getWholeAndFractionalPart(num);

  const wholeDigitCount = countWholeNumDigits(whole);
  const fractionDigitCount = countFractionNumDigits(fraction);
  return { wholeDigitCount, fractionDigitCount };
}

// // 🔎 Test cases
// console.log(countWholeAndFractionalDigits(12.34));
// console.log(countWholeAndFractionalDigits(0.24));
// console.log(countWholeAndFractionalDigits(0));
// console.log(countWholeAndFractionalDigits(-12));
// console.log(countWholeAndFractionalDigits(-14.5883));

// // 👉 ********************** 5. Generate a Decimal Number from Whole and Fractional Digits

function constructNumber(wholeDigitArr, fractionDigitArr) {
  function constructWhole(wholeDigitArr = []) {
    let whole = 0;
    const multiplyBy = wholeDigitArr[0] < 0 ? -1 : 1;
    for (const digit of wholeDigitArr) {
      whole = whole * 10 + Math.abs(digit);
    }
    return whole * multiplyBy;
  }
  function constructFraction(fractionDigitArr = []) {
    let fraction = 0,
      dividedBy = 1;
    for (const digit of fractionDigitArr) {
      fraction = fraction * 10 + digit;
      dividedBy *= 10;
    }
    return fraction / dividedBy;
  }

  const whole = constructWhole(wholeDigitArr);
  const fraction = constructFraction(fractionDigitArr) * (whole < 0 ? -1 : 1);
  return whole + fraction;
}

// // 🔎 Test cases
console.log(constructNumber([1, 2], [3, 4]));
console.log(constructNumber([0], [2, 4]));
console.log(constructNumber([0], []));
console.log(constructNumber([-1, 2], []));
console.log(constructNumber([-1, 4], [5, 8, 8, 3]));

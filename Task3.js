// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

function solution(number) {
    // Convert the number to a Roman numeral
   const numerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    // Corresponding values for Roman numerals
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    // Use reduce method to iterate over numerals array and build the Roman numeral representation
    return numerals.reduce(function (result, numeral, index) {
  
      // Calculate the count of the current Roman numeral in the given number
      let count = Math.floor(number / values[index]);
  
      // Update the number by taking the remainder after division
      number %= values[index];
  
      // Accumulate the Roman numeral representation
      return result + numeral.repeat(count);
  
    }, "");
  }
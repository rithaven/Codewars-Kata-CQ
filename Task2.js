// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function solution(roman) {
   
    const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  
    let decimalValue = 0;
    for (let i = 0; i < roman.length; i++) {
      // Get the decimal value of the current Roman numeral
      const currentValue = romanValues[roman[i]];
  
      // Get the decimal value of the next Roman numeral (if exists)
      const nextValue = romanValues[roman[i + 1]];
  
      // Add or subtract the current decimal value based on its comparison with the next value
      decimalValue += currentValue < nextValue ? -currentValue : currentValue;
    }
    
    // Return the calculated decimal value
    return decimalValue;
  }
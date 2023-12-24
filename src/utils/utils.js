function calculateBMI(heightInCm, gender) {
    if (heightInCm <= 0 || isNaN(heightInCm)) {
        return "Invalid height entered. Please enter a positive number.";
      }
    
      // Apply appropriate formula based on gender
      let idealWeight;
      if (gender.toLowerCase() === "male") {
        idealWeight = 50 + (0.91 * (heightInCm - 152.4));
      } else if (gender.toLowerCase() === "female") {
        idealWeight = 45.5 + (0.91 * (heightInCm - 152.4));
      } else {
        return "Invalid gender entered. Please enter 'male' or 'female'.";
      }
    
      // Round to two decimal places for readability
      return idealWeight.toFixed(1);
    
  }

   // Helper function to convert Roman numerals to numbers
function romanToNumber(roman) {
    const romanNumerals = { I: 1, II: 2, III: 3, IV: 4 };
    return romanNumerals[roman] || 0;
}

function calculateAndReturnParams(stepen, percent, foot, split) {
    const numericStepen = romanToNumber(stepen);

    const remainingPercent = 100 - percent;
    
    // Check if remainingPercent is <= 10 and numericStepen is > 1
    if (remainingPercent <= 10 && numericStepen > 1) {
        // Decrement numericStepen by 1 and append both values
        return `${foot}${split ? 'p' : ''}${numericStepen}${numericStepen - 1}`;
    } else if (remainingPercent >= 90 && numericStepen === 4) {
        // Check if remainingPercent is >= 90 and numericStepen is 4
        // If true, return ${numericStepen}${numericStepen}
        return `${foot}${split ? 'p' : ''}${numericStepen}${numericStepen}`;
    } else {
        // Return the string with the original numericStepen
        return `${foot}${split ? 'p' : ''}${numericStepen}${numericStepen}`;
    }
}

export { calculateBMI , calculateAndReturnParams }
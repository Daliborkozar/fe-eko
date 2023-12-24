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

  export { calculateBMI }
function addMonthsAndAdjustWeekend(monthsToAdd) {
  let currentDate = new Date();
  
  // Calculate the future date based on calendar months
  let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthsToAdd, currentDate.getDate());

  // Check if the future date is a Saturday (day 6) or Sunday (day 0)
  if (futureDate.getDay() === 6) { // Saturday
    // Move to the next Monday
    futureDate.setDate(futureDate.getDate() + 2);
  } else if (futureDate.getDay() === 0) { // Sunday
    // Move to the next Monday
    futureDate.setDate(futureDate.getDate() + 1);
  }

  return futureDate;
}

  export { addMonthsAndAdjustWeekend }
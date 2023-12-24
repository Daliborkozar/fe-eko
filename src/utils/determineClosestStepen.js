function determineClosestStepen(fdxValue) {
  let rangeStart, rangeEnd;

  if (fdxValue >= 0 && fdxValue < 20) {
    rangeStart = 0;
    rangeEnd = 20;
  } else if (fdxValue >= 20 && fdxValue < 40) {
    rangeStart = 20;
    rangeEnd = 40;
  } else if (fdxValue >= 40 && fdxValue < 60) {
    rangeStart = 40;
    rangeEnd = 60;
  } else if (fdxValue >= 60 && fdxValue <= 100) {
    rangeStart = 60;
    rangeEnd = 100;
  } else {
    // Handle other cases if needed
    return 'Invalid Range';
  }
console.log(fdxValue, 'determine stepi')
console.log(rangeStart,'rangestart')
  const percentage = ((fdxValue - rangeStart) / 20) * 100;

  return `${determineStepen(fdxValue)} (${percentage.toFixed(0)}%)`;
}
function determineStepen(fdxValue) {
  if (fdxValue >= 0 && fdxValue < 20) {
    return 'I';
  } else if (fdxValue >= 20 && fdxValue < 40) {
    return 'II';
  } else if (fdxValue >= 40 && fdxValue < 60) {
    return 'III';
  } else if (fdxValue >= 60 && fdxValue <= 100) {
    return 'IV';
  } else {
    // Handle other cases if needed
    return 'Invalid Range';
  }
}

export { determineClosestStepen };


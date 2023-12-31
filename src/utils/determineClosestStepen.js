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
    return 'Invalid Range';
  }
  console.log(rangeEnd)
  const percentage = ((fdxValue - rangeStart) / 20) * 100;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  return {
    stepen: determineStepen(fdxValue),
    percentage: clampedPercentage.toFixed(0),
  };
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
    return 'Invalid Range';
  }
}

export { determineClosestStepen };


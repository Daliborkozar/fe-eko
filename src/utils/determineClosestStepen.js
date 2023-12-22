
function determineClosestStepen(fdxValue) {
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
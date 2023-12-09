
function determineClosestStepen(baseRange, fdxValue) {
  const ix = baseRange;
  
  if (fdxValue >= 3 * ix) {
    return 'IV';
  } else if (fdxValue >= 2 * ix) {
    return 'III';
  } else if (fdxValue >= ix) {
    return 'II';
  } else {
    return 'I';
  }
}

export { determineClosestStepen }
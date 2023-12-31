const velicinaUloskaData = [
  { range: "24-25", min: 156, avg: 162.3, max: 169,initialHeight: 12, finalHeight: 15 },
  { range: "26-27", min: 169, avg: 175.5, max: 189.5, initialHeight: 12, finalHeight: 16 },
  { range: "28-29", min: 189.5, avg: 196, max: 202.5, initialHeight: 12, finalHeight: 17 },
  { range: "30-31", min: 202.5, avg: 209, max: 215.5, initialHeight: 13, finalHeight: 17 },
  { range: "32-33", min: 215.5, avg: 222, max: 228.5, initialHeight: 13, finalHeight: 17 },
  { range: "34-35", min: 228.5, avg: 235, max: 241.5,initialHeight: 14, finalHeight: 18 },
  { range: "36-37", min: 241.5, avg: 248, max: 254.5,initialHeight: 15, finalHeight: 19 },
  { range: "38-39", min: 254.5, avg: 261, max: 267.5,initialHeight: 15, finalHeight: 19 },
  { range: "40-41", min: 267.5, avg: 274, max: 280.5,initialHeight: 15, finalHeight: 20 },
  { range: "42-43", min: 280.5, avg: 287, max: 293.5,initialHeight: 15, finalHeight: 20 },
  { range: "44-45", min: 293.5, avg: 300, max: 306.5,initialHeight: 15, finalHeight: 20 },
  { range: "46-48", min: 306.5, avg: 313, max: 319.5,initialHeight: 15, finalHeight: 20 },
];

const findClosestObject = (number) => {
  // Assuming velicinaUloskaData is the array of objects
  const sortedData = velicinaUloskaData.sort((a, b) => {
    const aRange = a.range.split("-").map(Number);
    const bRange = b.range.split("-").map(Number);

    const aMidpoint = (aRange[0] + aRange[1]) / 2;
    const bMidpoint = (bRange[0] + bRange[1]) / 2;

    return Math.abs(number - aMidpoint) - Math.abs(number - bMidpoint);
  });

  return sortedData[0];
};


function findRange(leftFootLength, rightFootLength) {
  const minLength = Math.min(leftFootLength, rightFootLength);
  const maxLength = Math.max(leftFootLength, rightFootLength);

  // Check if the range is lower than the first or higher than the last
  if (minLength < velicinaUloskaData[0].min) {
    console.log(velicinaUloskaData[0], 'find range data');
    return velicinaUloskaData[0];
  } else if (maxLength > velicinaUloskaData[velicinaUloskaData.length - 1].max) {
    console.log(velicinaUloskaData[velicinaUloskaData.length - 1], 'find range data');
    return velicinaUloskaData[velicinaUloskaData.length - 1];
  }

  // Check for ranges between the data
  for (let i = 0; i < velicinaUloskaData.length; i++) {
    const data = velicinaUloskaData[i];

    if (minLength >= data.min && maxLength <= data.max) {
      console.log(data, 'find range data');
      return data;
    }

    // Check if max is in the next range
    if (i < velicinaUloskaData.length - 1 && maxLength > data.max && maxLength <= velicinaUloskaData[i + 1].max) {
      console.log(velicinaUloskaData[i + 1], 'find range data (next range)');
      return velicinaUloskaData[i + 1];
    }
  }

  return null; // or any other value to indicate no matching range found
}


export { velicinaUloskaData, findClosestObject, findRange };

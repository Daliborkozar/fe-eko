const velicinaUloskaData = [
  { range: "24-25", initialHeight: 12, finalHeight: 15 },
  { range: "26-27", initialHeight: 12, finalHeight: 16 },
  { range: "28-29", initialHeight: 12, finalHeight: 17 },
  { range: "30-31", initialHeight: 13, finalHeight: 17 },
  { range: "32-33", initialHeight: 13, finalHeight: 17 },
  { range: "34-35", initialHeight: 14, finalHeight: 18 },
  { range: "35-36", initialHeight: 15, finalHeight: 19 },
  { range: "36-37", initialHeight: 15, finalHeight: 19 },
  { range: "38-39", initialHeight: 15, finalHeight: 20 },
  { range: "40-41", initialHeight: 15, finalHeight: 20 },
  { range: "42-43", initialHeight: 15, finalHeight: 20 },
  { range: "44-45", initialHeight: 15, finalHeight: 20 },
  { range: "46-48", initialHeight: 15, finalHeight: 20 },
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

export { velicinaUloskaData, findClosestObject };

function threeSum(arr, target) {
  //applying binary search  algo after sorting
  // "use strict";
  let currentSum = Infinity;
  let currentDistance = Infinity - target;
  arr.sort((x, y) => {
    return x - y;
  });

  for (let i = 0; i < arr.length - 2; i++) {
    let l = i + 1,
      r = arr.length - 1;

    while (l < r) {
      let calculatedSum = arr[i] + arr[l] + arr[r];
      let calculatedDistance = Math.abs(calculatedSum - target);
      if (calculatedDistance < currentDistance) {
        currentDistance = calculatedDistance;
        currentSum = calculatedSum;
      }
      //now keep the serch of smaller distance continue
      if (currentSum > target) r--;
      else if (target > currentSum) l++;
      else return currentSum;
    }
  }

  return currentSum;
}

module.exports = threeSum;

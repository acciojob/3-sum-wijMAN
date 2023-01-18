function threeSum(arr, target) {
  //applying binary search  algo after sorting
  "use strict";
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
      else l++;
    }
  }

  return currentSum;
}

//rahulbarik23
// function threeSum(arr, target) {
//   // arr.sort((a, b) => a - b);
//   // let closestSum = Infinity;

//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1,
//       right = arr.length - 1;

//     while (left < right) {
//       let currentSum = arr[i] + arr[left] + arr[right];
//       if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//         closestSum = currentSum;
//       }
//       if (currentSum < target) {
//         left++;
//       } else if (currentSum > target) {
//         right--;
//       } else {
//         return currentSum;
//       }
//     }
//   }
//   return closestSum;
// }
module.exports = threeSum;

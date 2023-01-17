let distance = Infinity;
let value = -3;

function threeSum(arr, target) {
  //your code here
  // arr.sort
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        fun2(i, j, k, target, arr);
      }
    }
  }
  return value;
}

let fun2 = (i, j, k, target, arr) => {
  let sum = arr[i] + arr[j] + arr[k];
  let dis = -1;
  if (sum > target) dis = sum - target;
  else dis = target - sum;

  if (dis < distance) {
    value = sum;
    distance = dis;
  }
};

// let a = [-1, 2, 1, 4];
// console.log(threeSum(a, 1));

module.exports = threeSum;

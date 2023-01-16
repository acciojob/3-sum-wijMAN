function threeSum(arr, target) {
  //your code here
  let distance = -1;
  let value = -1;
  let k1 = true;

  for (let i = 0; i < arr.length - 2; i++) {
    let sum = arr[i] + arr[i + 1] + arr[i + 2];
    let dis = -1;
    if (sum > target) {
      dis = sum - target;
      if (k1) {
        k1 = false;
        value = sum;
        distance = dis;
      }
    } else {
      dis = target - sum;
      if (k1) {
        k1 = false;
        value = sum;
        distance = dis;
      }
    }

    if (dis < distance) value = sum;
  }
  return value;
}

// let a = [-1, 2, 1, -4, 7];
// console.log(threeSum(a, 1));

module.exports = threeSum;

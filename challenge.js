function compareTriplets(a, b) {
  // Write your code here
  let resultArray = [0,0];
  // for (let i = 0; i < a.length; i++) {
  //     if (a[i] > b[i]) {
  //         resultArray[0] += 1;
  //     } else if (b[i] > a[i]) {
  //         resultArray[1] += 1;
  //     }
  // }
  a.forEach((item, index) => {
      if (item > b[index]) {
          resultArray[0] += 1;
      } else if (b[index] > item) {
          resultArray[1] += 1;
      }
  })
  return resultArray;
}
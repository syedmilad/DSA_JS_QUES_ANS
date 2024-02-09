// Largest Sum of Consecutive Digits
// [1,2,3,4,5,6,6,7,8,9,9]
// array of number 11
// consecutive Number like we suppose 4
// 11 - 4 + 1 = 7
// number of array - consecutive number + one  = answer how much loop will run

const largestNumberOfConsecutiveNumber = (array, conNum) => {
  if (conNum > array.length) {
    throw new Erro("Number should be less than array length");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - conNum + 1; i++) {
      let temp = 0;
      for (let j = 0; j < conNum; j++) {
        // console.table(j);
        console.log("array i ", array[i]);
        console.log("array j", array[j]);
        temp = temp + array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
};

const result = largestNumberOfConsecutiveNumber([1, 2, 3], 2);
console.log(result);

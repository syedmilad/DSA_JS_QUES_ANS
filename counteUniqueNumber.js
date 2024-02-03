//        ,              i           j
// [1, 2, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 8]; // This is sorted valued if not so change the logic
// find the unique number in this array
// let i = 0;
// let j = 1;

const countUniqueNumber = (array) => {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
      //   return i + 1; // return statement is not valid place
    }
    return i + 1;
  }
};

const result = countUniqueNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9]);
console.log(result);

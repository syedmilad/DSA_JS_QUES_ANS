// [2,1,4,5,6,7,8,9,10,11]
// find the odd number with the help of helper recursive
// number % 2 !== 0 // this is odd jo 2 say multiply na hun
// number % 2 === 0 // this is even jo 2 say multiply hun

const findEven = (array) => {
  let result = [];
  function helperRecursive(myArray) {
    if (myArray.length === 0) {
      return false;
    }
    if (myArray[0] % 2 === 0) {
      result.push(myArray[0]);
    }
    helperRecursive(myArray.slice(1));
  }
  helperRecursive(array);
  return result;
};

const res = findEven([2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 11, -11]);
console.log("Even Number from an Array ==>", res);

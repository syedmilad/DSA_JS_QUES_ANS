// checkSquare
// array1 = [1,2,3,4] array2 = [1,4,9,4]

const checkSquare = (Array1, Array2) => {
  let obj1 = {};
  let obj2 = {};
  for (const item1 of Array1) {
    obj1[item1] = (obj1[item1] || 0) + 1;
  }
  for (const item2 of Array2) {
    obj2[item2] = (obj2[item2] || 0) + 1;
  }

  for (const key in obj1) {
    if (!obj2[key * key]) {
      return false;
    }
    if (obj1[key] !== obj2[key * key]) {
      return false;
    }
  }

  return true;
};

const result = checkSquare([1, 4, 2], [1, 4, 9]);
console.log(result);

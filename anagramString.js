// anagram
// "milad", "dalim"

const checkAnagram = (string1, string2) => {
  if (string1.length != string2.length) {
    return false;
  }
  const counter = {};
  for (let letters of string1) {
    counter[letters] = ((counter[letters] || 0) + 1);
  }
  console.log(counter)

  for(let item of string2){
    return counter[item]
  }
  return true
};

const result = checkAnagram("milaad", "daalim");
console.log(result);
console.log((1 || 0) + 1)
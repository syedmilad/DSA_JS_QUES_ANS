// consecutive number in array
// [1,2,3,4,5,6,7,8,9]
// number 4
// 9 - 4 + 1 itni bar loop chalana hain mujhn

// const arrayForI = ["milad", "faiz", "mhamil", "mubarram"];
// for (let i = 0; i < arrayForI.length; i++) {
//   console.log(arrayForI[i]);
//   let arrayForJ = ["WorldNumberOnePerson1", "WorldNumberOnePerson2"];
//   for (let j = 0; j < arrayForJ.length; j++) {
//     console.log(arrayForJ[j]);
//     arrayForI.pop(arrayForJ[j]); // is line say ye
//     console.log(arrayForI);
//   }
//   console.log("outer");
//   console.log(arrayForI);
// }

// console.log(arrayForI);


const consecutiveNumber = (array, number) => {
    if (number > array.length) {
        throw new Error("Number is Greater than Array length!")
    } else {
        let max = 0;
        for(let i = 0; i < array.length - number + 1; i++){
            let temp = 0
            for(let j=0; j < number; j++){
                temp = temp +  array[j + i]
            }
            if(temp > max){
                max = temp
            }
        }
        return max;
    }
}
const result = consecutiveNumber([1,2,3,4,5,6,7,8,9],4);

// const array = [1,2,3,4,5];
// console.log(array)

// for loop

for (let i = 0; i < 5; i++) {
    // console.log("Outer Loop value:", i)
    for (let j = 0; j < 5; j++) {
        // console.log("Inner Loop value", j , "inner Loop Value", i )
        // console.log(`${i} * ${j  } = ${i * j}`)
    }    
}
const array = [1,2,3,4,5,6]
let total = 0
for (let index = 0; index < array.length; index++) {
    total = total + array[index]
}
console.log(total)


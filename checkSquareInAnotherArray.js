// checkSquareInAnotherArray.js
// first array [1,2,3,4] || second array [1,9,4,14]
// if(array[i] * array[i] === array[j])
// let isSquare = true
// if square is not exist so return false

// const checkSquareInAnotherArray = (Array1,Array2) => {
//     for (let i = 0; i < Array1.length; i++) {
//         let isSquare = false
//         for (let j = 0; j < Array2.length; j++) {
//            if(Array1[i] * Array1[i] === Array2[j]){
//             isSquare = true
//            }
//            if(j == Array2.length -1){
//             if(!isSquare){
//                 return false
//             }
//            }
//         }
//     }
//     return true
// }

// const result = checkSquareInAnotherArray([1,2,3,4],[1,9,4,16])
// console.log(result)

// approach second to this solve challange

// 1 array [1,2,2,4,5]
// 2 array [1,4,4,16,25]

// case obj1={1:1, 2:2,  4:1, 5:1 } iski key 2ndarray ka square hain or iski value 2nd array value same hogi hamesha
// case obj2={1:1, 4:2,  16:1, 25: 1}

const chectSquare = (Array1,Array2) => {
    let obj1 = {}
    let obj2 = {}
    for (const item1 of Array1) {
        obj1[item1] = (obj1[item1] || 0 ) + 1
    }
    for (const item2 of Array2) {
        obj2[item2] = (obj2[item2] || 0 ) + 1
    }

    for (let key in obj1) {
        if(!obj2[key * key]){
            return false
        }
        if(obj1[key] !== obj2[key * key]){
            return false
        }
    }
    return true;
}

const result = chectSquare([1,2,3],[1,4,9])
console.log(result)

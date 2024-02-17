// sorting array wiht recursion
// [2,3,1,4]
// [2,3,1,4] case 1
// [2,1,3,4]
// [1,2,3,4]

let i = 0;
let j = 1;
let myArray = [2,3,1,4];
let myNewArray = []

function isSorted(array){
    for (let i = 0; i < array.length; i++) {
       if(array[i] > array[j]){
        return false
       }
    }
    return true
}

function checkSorting(array) {
    if(isSorted(array)){
        myNewArray = array;
        return 
    }
   else if(array[i] < array[j]){
        i++
        j++;
        checkSorting(array)
    }else{
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j =1;
        checkSorting(array)
    }
}

checkSorting(myArray);
console.log(myNewArray)


































// let counter = 1;
// function recursionFunction(number){
//     if(counter > number){
//         return
//     }

//     console.log("Counter value is ==> ", counter)
//     counter++
//     recursionFunction(number)
// }

// recursionFunction(10)

// function doSomething(n){
//     if(n === 0){
//         console.log("task complete")
//         return 
//     }
//     console.log("I am doing something");
//     doSomething(n - 1)
// }

// doSomething(3)


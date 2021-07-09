// let arr = [1, 2, 3, 2, 5, 6];
//
// function indexOf(str, items){
//
//     for (let i = 0; i <= str.length; i++){
//
//         if (str[i] === items){
//             return i;
//         }
//     }
//     return -1;
// }
//
// console.log(indexOf(arr, 2));



// let arr = [1, 2, 3, 2, 5, 6];
//
// function indexOf(str, items){
//
//     for (let i = str.length; i > 0; i--){
//
//         if (str[i] === items){
//             return i;
//         }
//     }
//     return -1;
// }
//
// console.log(indexOf(arr, 2));

//
// let arr = [6, 8, 10, 12, 20, 21];
//
// function findIndex(arr, items){
//
//     for (let i = 0; i <= arr.length; i++){
//
//         if (arr[i] % 2 !== 0){
//             return i;
//         }
//     }
//     return -1;
//
// }

// console.log(findIndex(arr));



// let arr = [3, 1, 6,  13, ];
//
// function find(arr, items){
//
//     for (let i = 0; i <= arr.length; i++){
//
//         if (arr[i] % 2 === 0){
//             return arr[i];
//         }
//     }
//     return undefined;
//
// }
//
// console.log(find(arr));



// let arr = [1, 10, 100, 1000, 'marat'];
//
// function include(arr, items){
//     for (let i = 0; i <= arr.length; i++){

//         if (arr[i] === items){
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(include(arr, 'marat',));


// let arr = [102, 101, 103, 105, 104, 100,];
//
// function every(arr, items){
//     for (let i = 0; i <= arr.length - 1; i++ ){
//
//         if (!items(arr[i])){
//             return false;
//         }
//     }
//     return true;
// }
//
//  function comparison(arg){
//     return arg >= 100;
//  }
//
//
// console.log(every(arr, comparison));




// let arr = [2, 4, 6, 7, 10 ];
//
// function some(arr, items){
//     for (let i = 0; i <= arr.length - 1; i++ ){
//         if (items(arr[i])){
//             return true;
//         }
//     }
//     return false;
// }
//
// function isEven(arg){
//     return  arg % 2 !== 0;
// }
//
// console.log(some(arr, isEven));
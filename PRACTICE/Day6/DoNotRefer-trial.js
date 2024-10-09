// let numbers = [2,3,4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

let arr1 = [1,2,3,4,5,4];
let arr2 = [3,4,3,6];

function intersection(arr1, arr2) {
    let arr3
//console.log(arr1);
// arr1.forEach(eachArr1 => {
//     eachArr1=eachArr1+1
//     console.log(eachArr1);
    
// });

arr1.forEach(element => {
    arr2.forEach(element1 => {
        if (element==element1){
arr3.push(element);
        }
// console.log(element1);
    });
    //console.log(element);
    
});


console.log(arr3);

}

intersection(arr1, arr2)
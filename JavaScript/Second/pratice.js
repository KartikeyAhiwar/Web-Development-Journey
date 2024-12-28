
// ***************************first program**********************:
let obj = {
    name : "Kartikey",
    age : 22,
    course : "Btech",
    branch : "IT",
    roll : 21036128}

// console.log(obj)
// using for loop:
for (let i = 0; i < 4; i++){
    console.log(obj[Object.keys(obj)[i]])
}
// using for in loop:
for (let i in obj){
    console.log(obj[i])
}

// ***********************second program**************************:
let arr = [1,2,3,4,5]
let head ="index"
console.log(head,"value")
for (let i in arr){
    console.log(" ",i,"  ",arr[i])
}

// ************************************third program**************************
// let num = 4
// while (num==5){
//     console.log("tryagain!")
    
// }


// ************************************fourth program**************************
let numb = [2,6,8,4,8];
for (let j = 0; j < numb; j++) {
    console.log(numb[j])
    
}

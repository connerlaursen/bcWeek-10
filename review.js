// for of
//this is for arrays
const fruits =["banana","apple","lemon"]
// for (let i=0;i<fruits.length;i++){
//     console.log(`Current fruit at index ${i}, ${fruits[i]}`);
// }

// for(let variable of fruits){
//     console.log(`Current fruit ${variable}`)
// }

// for in
const activities = {
    outdoor:["hiking", "biking", "boating"],
    indoor:["eating", "basketball"],
    test:0,
    secondTest:0
}


// for(let activity in activities){
//     console.log(activity);
// }

//rest and spread.


const outdoor = ["hiking",123, "biking", "boating",[123,345,567],{a:123,b:"asd"}];

const copyOutdoor = [...outdoor];
copyOutdoor[0]="Copy Hiking";
copyOutdoor[4][0]=999999999;
// console.log("original array", outdoor);
// console.log("copyOutdoor array", copyOutdoor);

// shallow and deep copy

// for (let activity of outdoor){
//     copyOutdoor.push(activity);
// }\


const sum= (...nums)=>{
// console.log(nums);
return nums.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
}

let total = sum(1,2,3,4,5,6,7,8,9,10);
// console.log(total);

const names = ["Alex","Jon", "Josh"];
const newArray =[23,4,5,6,7,8,3,4,5,7]
const fruitAmount ={
    banana:10,
    apple:5,
    pear:2
}

//destruct
const [var1, var2, var3] = names;
console.log(var1, var2, var3);
const {banana,apple, pear} = fruitAmount;
console.log(banana, apple, pear);

Array.prototype.getFirstAndLast = function(){
    console.log(`first element is ${this[0]}, last element is ${this[this.length-1]}`)
}

names.getFirstAndLast()

newArray.getFirstAndLast()





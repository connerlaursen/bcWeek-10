// // print all numbers in this array each second [0,1,2,3,4,5,6]
let numbers = [0,1,2,3,4,5,6]



const usePromise = async () =>{


    for(let number of numbers){
        let myPromise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Finally');
            },1000)
        }) 
        console.log(number);
            await myPromise

    }

}

usePromise();

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Finally');
    },2000)
}) 

console.log(myPromise)
myPromise.then(()=>{
    console.log('promise resolved')
})

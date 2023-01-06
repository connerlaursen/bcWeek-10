// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
// console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = () => {
  return new Promise((resolve, reject)=>{
    if (studentDistracted){
      reject({issue: 'Distracted',message: 'Coding stopped'});
    } else {
      resolve('We are coding in promises!');
    }
  })
};

const callback = (message) => console.log(message);
const errorCallback = (message) => console.log(message);


// console.log(fetch("https://google.com").catch(e=>console.log(e)));

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
// practiceCoding()
// .then((data)=>{
//   console.log(data)
// })
// .catch((e)=>{
//   console.log("Promise rejected: ",e)
// })

const callFunctionHere = ()=>{
  console.log('function was called');
  const myPromise = new Promise ((resolve, reject)=>{
 reject("catch value")
// resolve("sending some data")
  })
  return myPromise
}


// callFunctionHere()
// .then((data)=>{
//   console.log("Success", data)
// })
// .catch((value)=>{
//   console.log("failure", value)
// });



const getOddsOnly = ()=>{
  const newTestPromise = new Promise((resolve,reject)=>{
    reject("usually an error");
  });
  return newTestPromise
}

getOddsOnly()
.then(()=>{
  console.log('SUCCESS')
})
.catch((e)=>{
  console.log("REJECTION HANDLED", e)
})

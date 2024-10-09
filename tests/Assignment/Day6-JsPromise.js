let conditionalPromise = new Promise((resolve, reject) => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const randomNumberForConditionalPromise = getRandomNumber(0,1)
      console.log(`Random number is ${randomNumberForConditionalPromise}`);
      

if(randomNumberForConditionalPromise>0.5)
resolve("Resolved Successfully")
else
reject("Rejected")
})


conditionalPromise
.then(result => {
console.log(result);

})
.catch(result =>{
    console.log(result);
})

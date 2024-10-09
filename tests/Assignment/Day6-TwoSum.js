const twoSumNumbers = [2, 4, 7, 8, 11, 14]
const target = 18

for(let i=0; i<=(twoSumNumbers.length-1); i++)

    for(let j=i+1; j<=(twoSumNumbers.length-1); j++){
        if(twoSumNumbers[i]+twoSumNumbers[j]==target)
            console.log(`Numbers '${twoSumNumbers[i]}' and '${twoSumNumbers[j]}' sum to '${target}'. Indexes of the numbers are '${i}' and '${j}' respectively`);
            else
            continue;
    }


// twoSumNumbers.forEach((firstEach) => {

// for()


// })

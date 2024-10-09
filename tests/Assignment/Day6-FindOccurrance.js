let findOccurranceNumber = 2
let findOccurranceArray = [2, 4, 5, 2, 1, 2]
let findOccurranceCount = 0

findOccurranceArray.forEach((each) => {
    if(each==findOccurranceNumber)
        findOccurranceCount++
})

console.log(`Occurrence of '${findOccurranceNumber}' in '${findOccurranceArray}' is '${findOccurranceCount}'`);

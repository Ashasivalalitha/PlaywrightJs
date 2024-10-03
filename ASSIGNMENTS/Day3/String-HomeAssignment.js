//Example 1
let s1="Hello World"
console.log(s1);
let s1Array = s1.split(" ")
let s1Length = s1Array.length
let s1LastWord = s1Array[s1Length-1]
console.log(`Last word is : ${s1LastWord}. Length is ${s1LastWord.length}`);
console.log();

//Example 2
let s2=" fly me to the moon "
console.log(s2);
let s2Trimmed=s2.trim()
let s2Array = s2Trimmed.split(" ")
let s2Length = s2Array.length
let s2LastWord = s2Array[s2Length-1]
console.log(`Last word is : ${s2LastWord}. Length is ${s2LastWord.length}`);
console.log();


//Example 3
function isAnagram() {
    let t1='listen'
    let t2='silent'
    t1=t1.toLowerCase()
    t2=t2.toLowerCase()
    t1 = t1.split("").sort()
    t2 = t2.split("").sort()

    console.log(t1);
    console.log(t2);


    let isDataMatching = false
    for (let i=0; i<=t1.length-1;i++)
    if(t1[i]!=(t2[i])){
        isDataMatching = false
        break;
    }
    else{
        isDataMatching=true
        continue;
    }

    if(isDataMatching)
    console.log('Anagram: True');
    else
    console.log('Anagram: False');
    
}
isAnagram()
function reverseAString() {
    let input = "FannaF"
    let length = input.split('').length;
    let output = ''
    for(let i=length-1 ; i>=0 ; i--)
        output = output + input.charAt(i)
        console.log(output);
        
        if(input===output){
            console.log('It is a Palindrome!')
        return true
        }
        else{
        console.log('It is not a Palindrome!')
          return false  
}
}
console.log(reverseAString());
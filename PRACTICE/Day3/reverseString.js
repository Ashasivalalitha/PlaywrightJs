function reverseAString() {
    let sampleName = "TestLeaf"
    let length = sampleName.split('').length;
    let output = ''
    for(let i=length-1 ; i>=0 ; i--)
        output = output + sampleName.charAt(i)
        console.log(output);
        //console.log(sampleName.charAt(i));
        
}

reverseAString()
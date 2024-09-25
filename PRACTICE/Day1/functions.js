//fn declaration
function getname(name){
return `Hi ${name}`
}
console.log(getname('Sam'));


//fn expression
let user = function(name){
    console.log(`Hi ${name}`);
}
user('Ram');

//Arrow function
const child1 = (childName) => `Hi ${childName}`;
console.log(child1('Sri'));

const child2 = () => `Hi Sree`;
console.log(child2());

//async function - below throws error
async function launchBrowser(){
    const browser = await chromium.launch();
    console.log(browser);
}
launchBrowser();
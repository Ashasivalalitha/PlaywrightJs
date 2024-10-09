function userProfile(name) {
    console.log(`Hello ${name}`);   
}

const double = (number) => {
return number*number
}

let getTimeOutMessage = () => {
    setTimeout(() => {
        console.log(`This message is delayed by 2 secs`);
    }, 2000);
}

function getUserData(callback) {
    setTimeout(() => {
        let user = {name:'David', age:55}
        callback(user)
    }, 3000);
}
function userData(user) {
console.log(user.name);
console.log(user.age);
}





userProfile('Elon')
double(console.log(double(3)));
getTimeOutMessage()
getUserData(userData)
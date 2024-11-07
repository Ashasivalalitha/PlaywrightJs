import { test, expect } from "@playwright/test";


//let sysId:any;
test(`Test api response`, async({request})=>{

const startTime = performance.now()

const response = await request.post(
"https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead/",
{
    headers:{
"Authorization": "Basic jZ+M4M4f&&W",
"Content-Type":"application/json"
    },
    data:{
        "FirstName" : "FirstNameSunday",
        "LastName" : "LastNameSunday",
        "Company" : "CompanyNameSunday",
        "Email" : "companySunday@gmail.com"
    }
}
)


const responseBody = await response.json()
console.log(responseBody);

const responseStatus = response.status()
console.log(`Status is '${responseStatus}'`);

expect(responseStatus,`Expected status is 201`).toBe(201)

let id = responseBody.id;
console.log(`Id is '${id}'`);

const endTime = performance.now()
const responseTime = endTime-startTime
console.log(`Response time is '${responseTime}'`);


})
import { test, expect } from "@playwright/test";

let accessToken:any
let instUrl:any

test(`Test api oauth`, async({request})=>{
const response = await request.post(
"https://login.salesforce.com/services/oauth2/token",
{
    headers:{
"Content-Type": "application/x-www-form-urlencoded"
    },
    form:{
        "grant_type" : "password",
        "client_id" : "3MVG9XgkMlifdwVDmhsW7nXH_.ARVg57Q4DteVKo5070JqObRmUm_AUs_fEAxG.jc.M0OEUGFb1Q8D4UKeRLc",
        "client_secret" : "80B42BEB92E10298086709D4B1943D481040514957C6B1B6802754C5358492F6",
        "username" : "ashasiva.10002000@gmail.com",
        "password" : "!1Sample"  
    }
}
)


const responseBody = await response.json()
console.log(responseBody);

const responseStatus = response.status()
console.log(`Status is '${responseStatus}'`);

expect(responseStatus,`Expected status is 201`).toBe(200)

accessToken = responseBody.access_token;
console.log(`Access token is '${accessToken}'`);

instUrl = responseBody.instance_url;
console.log(`Instance url is '${instUrl}'`);

})


//create lead
test(`Test api response`, async({request})=>{


    
    const response = await request.post(
    "https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead/",
    {
        headers:{
    "Authorization": `Bearer ${accessToken}`,
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
    

    
    
    })
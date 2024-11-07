import { test, expect } from "@playwright/test";
import { getOAuthToken } from "./Day12-Api-generateOAuth";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
let id_Lead: any
const accessToken_Lead= "00Daj00000F6nOn!AQEAQN3_7yDyOfZBBfPXjv1ZXGngPK6FtJXvmDFt1krRzEfURAsH6NO0tDiXAIEciEzc.hktvGiJX82p6q.2SMJCENymeTsd"
let accessToken:any

//create lead
test(`Test sf lead create`, async ({ request }) => {
    const authData = await getOAuthToken()
    accessToken = authData.accessToken
    const response = await request.post(
        "https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead/",
        {
            headers: {
            //    "Authorization": `Bearer ${accessToken}`,
            "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            data: {
                "FirstName": "FirstNameMon"+getRandomNumber(1,100),
                "LastName": "LastNameMon"+getRandomNumber(1,100),
                "Company": "CompanyNameMon"+getRandomNumber(1,100),
                "Email": "companyMon"+getRandomNumber(1,100)+"@gmail.com"
            }
        }
    )
    const responseBody = await response.json()
    console.log(`Response body of Create Lead: `);
    console.log(responseBody);

    const responseStatus = response.status()
    console.log(`Create Lead Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 201`).toBe(201)

    id_Lead = responseBody.id;
    console.log(`Create new Lead Id is '${id_Lead}'`);
    console.log(`---------------------`);

})


//update lead
test(`Test sf update lead`, async ({ request }) => {

    const response1 = await request.patch(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead/${id_Lead}`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            data: {
                "FirstName": "FirstNameMon"+getRandomNumber(1,100)+"Updated",
            }
        }
    )
    // const responseBody = await response1.json()
    // console.log(`Response body of Update Lead: `);
    // console.log(responseBody);

    const responseStatus = response1.status()
    console.log(`Update Lead Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(204)
    console.log(`---------------------`);
})

//get lead
test(`Test sf get lead`, async ({ request }) => {

    const response2 = await request.get(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead/${id_Lead}`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    const responseBody = await response2.json()
    console.log(`Response body of Get Lead: `);
    console.log(responseBody);

    const responseStatus = response2.status()
    console.log(`Update Lead Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(200)
    console.log(`---------------------`);
})
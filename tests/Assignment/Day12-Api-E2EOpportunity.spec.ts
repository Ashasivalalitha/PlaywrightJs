import { test,expect } from "@playwright/test";
import { get_SF_OAuthToken } from "./Day12-Api-generateOAuthToken";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let accessToken_SF:any
  let id_Opportunity:any
  let id_opportunity_firstRecord:any


  //create Opportunity
test(`Test sf opportunity create`, async ({ request }) => {
    const authData = await get_SF_OAuthToken()
    accessToken_SF = authData.accessToken_SF
    const response = await request.post(
        "https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity/",
        {
            headers: {
            "Authorization": `Bearer ${accessToken_SF}`,
                "Content-Type": "application/json"
            },
            data: {
                "Name": "Opportunity"+getRandomNumber(1000,10000),
                "CloseDate": "2024-12-31",
                "StageName": "Prospecting"
            }
        }
    )
    const responseBody = await response.json()
    console.log(`Response body of Create Opportunity: `);
    console.log(responseBody);

    const responseStatus = response.status()
    console.log(`Create Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 201`).toBe(201)

    id_Opportunity = responseBody.id;
    console.log(`Create new Opportunity Id is '${id_Opportunity}'`);
    console.log(`---------------------`);

})



//update Opportunity
test(`Test sf update Opportunity`, async ({ request }) => {

    const response1 = await request.patch(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity/${id_Opportunity}`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken_SF}`,
                "Content-Type": "application/json"
            },
            data: {
                  "StageName": "Qualification",
                  "Type": "New Customer"
            }
        }
    )
    const responseStatus = response1.status()
    console.log(`Update Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 204`).toBe(204)
    console.log(`---------------------`);
})



//get Opportunity
test(`Test sf get Opportunity`, async ({ request }) => {

    const response2 = await request.get(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity/${id_Opportunity}`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken_SF}`
            }
        }
    )
    const responseBody = await response2.json()
    console.log(`Response body of get Opportunity: `);
    console.log(responseBody);

    const responseStatus = response2.status()
    console.log(`Get Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(200)
    console.log(`---------------------`);
})


//get all Opportunities
test(`Test sf get all Opportunities before delete`, async ({ request }) => {

    const response3 = await request.get(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken_SF}`
            }
        }
    )

    expect(response3.ok()).toBeTruthy();

    const responseBody = await response3.json()
    console.log(`Response body of get all Opportunity: `);
    console.log(responseBody);

    console.log(`Total opportunity before delete: '${responseBody.recentItems.length}'`);

    if(responseBody.recentItems.length==0){
        console.log("No records");
        return;
    }
    id_opportunity_firstRecord = responseBody.recentItems[0].Id
console.log(`First record id is '${id_opportunity_firstRecord}'`);


    const responseStatus = response3.status()
    console.log(`Get all Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(200)
    console.log(`---------------------`);

    
    
})


//delete Opportunity
test(`Test sf delete first Opportunity`, async ({ request }) => {

    const response4 = await request.delete(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity/${id_opportunity_firstRecord}`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken_SF}`
            }
        }
    )
    // const responseBody = await response2.json()
    // console.log(`Response body of get Opportunity: `);
    // console.log(responseBody);

    const responseStatus = response4.status()
    console.log(`Delete Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 204`).toBe(204)
    console.log(`---------------------`);


})

//get all Opportunities
test(`Test sf get all Opportunities after delete`, async ({ request }) => {

    const response5 = await request.get(
        `https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Opportunity`,
        {
            headers: {
                "Authorization": `Bearer ${accessToken_SF}`
            }
        }
    )
    const responseBody = await response5.json()
    console.log(`Response body of get all Opportunity: `);
    console.log(responseBody);

    console.log(`Total opportunity after delete: '${responseBody.recentItems.length}'`);

    if(responseBody.recentItems.length==0){
        console.log("No records");
        return;
    }
    id_opportunity_firstRecord = responseBody.recentItems[0].id

    const responseStatus = response5.status()
    console.log(`Get all Opportunity Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(200)
    console.log(`---------------------`);

    
    
})
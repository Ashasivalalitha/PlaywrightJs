import { test, expect } from "@playwright/test";

let sys_id: any
let credential = "Basic " + "YWRtaW46clI2dSFzV25GTTMk"
const basicEndPointUrl = "https://dev280037.service-now.com/api/now/table/change_request"
                          

//create cr
test(`Create CR`, async ({ request }) => {
    const response = await request.post(
        basicEndPointUrl,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Authorization": credential
            },
            data: {
                "short_description": "This is new CR description"
            }
        }
    )
    //console.log(await response.text());
    //console.log("*****************************");
    
    const responseBody = await response.json()
    console.log("Create CR response body:");
    console.log(responseBody);

    const status = response.status()
    console.log(`Status`);
    expect(status, 'Expected status is 201').toBe(201)

    sys_id = responseBody.result.sys_id
    console.log(`Sys_id is '${sys_id}'`);

})



//update cr
test(`Update CR`, async ({ request }) => {
    const response = await request.patch(
        basicEndPointUrl + "/" + sys_id,
        {
            headers: {
                "Authorization": credential,
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            data: {
                "short_description": "This is new CR description UPDATED"
            }
        }
    )

    const responseBody = await response.json()

    const status = response.status()
    console.log(`Status`);
    expect(status, 'Expected status is 201').toBe(200)

    const short_description=responseBody.result.short_description
    expect(short_description,`Expected short description is '${short_description}'`).toBe(short_description)

})



//get cr
test(`Test serviceNow get cr`, async ({ request }) => {

    const response2 = await request.get(
        basicEndPointUrl + "/" + sys_id,
        {
            headers: {
                "Authorization": credential,
                "Accept":"application/json"
            }
        }
    )
    const responseBody = await response2.json()
    console.log(`Response body of get cr: `);
    console.log(responseBody);

    const responseStatus = response2.status()
    console.log(`Get CR Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 200`).toBe(200)
    console.log(`---------------------`);
})


//delete cr
test(`Test serviceNow delete cr`, async ({ request }) => {

    const response2 = await request.delete(
        basicEndPointUrl + "/" + sys_id,
        {
            headers: {
                "Authorization": credential
            }
        }
    )

    const responseStatus = response2.status()
    console.log(`Deleted CR Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 204`).toBe(204)
    console.log(`---------------------`);
})
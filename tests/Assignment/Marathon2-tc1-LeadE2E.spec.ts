import { test, expect } from "@playwright/test";
import { get_SF_OAuthToken } from "./Day12-Api-generateOAuthToken";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
let accessTokenForLead_SF: any
const basicEndPoint = "https://motorola12-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects"
const randomNumber = getRandomNumber(100,10000)
const firstName = "FirstName"+randomNumber
const lastName = "LastName"+randomNumber
const companyName = "CompanyName"+randomNumber
const salutation = "Mr."
const title = "Title"+randomNumber
let id_Lead:any
console.log(`First name is '${firstName}'`);
console.log(`Last name is '${lastName}'`);


test(`Create Lead`, async ({ request }) => {
    const authDataForCreateLead = await get_SF_OAuthToken()
    accessTokenForLead_SF = authDataForCreateLead.accessToken_SF

    const response = await request.post(
        basicEndPoint + "/Lead/",
        {
            headers: {
                "Authorization": "Bearer " + accessTokenForLead_SF,
                "Content-Type": "application/json"
            },
            data: {
                "Salutation": salutation,
                "LastName": lastName,
                "Company": companyName
            }
        }
    )
const responseBody = await response.json()
console.log(`Response body from create Lead:`);
console.log(responseBody);
expect(response.status(),`Expected status for create lead is 201`).toBe(201)

id_Lead = responseBody.id
//00Qaj00000AD1uzEAD
console.log(`Create Lead id is : ${id_Lead}`)
})


test(`Update Lead`, async ({ request }) => {

    const response1 = await request.patch(
        basicEndPoint + "/Lead/"+id_Lead,
        {
            headers: {
                "Authorization": "Bearer " + accessTokenForLead_SF,
                "Content-Type": "application/json"
            },
            data: {
                "FirstName": firstName,
                "Title": title
            }
        }
    )
// const responseBody1 = await response1.json()
// console.log(`Response body from update Lead:`);
// console.log(responseBody1);
expect(response1.status(),`Expected status for update lead is 204`).toBe(204)

})


test(`Delete Lead`, async ({ page }) => {

    await page.goto("https://motorola12-dev-ed.develop.my.salesforce.com")
    await page.fill("//input[@name='username']", "ashasiva.10002000@gmail.com")
    await page.fill("//input[@name='pw']", "!1Sample")
    await page.click("//input[@name='Login']")

    await page.click("//div[@class='slds-icon-waffle']")
await page.click("//button[contains(text(),'View All')]")
await page.fill("//input[@placeholder='Search apps or items...']", "Leads")
await page.click("//mark[text()='Leads']")
await page.click("//span[text()='Leads']")

await page.fill("//input[@name='Lead-search-input']",lastName)
await page.click("//input[@name='Lead-search-input']")
await page.locator("//input[@name='Lead-search-input']").press('Enter')
expect(page.locator("//a[@data-refid='recordId' and @title='"+firstName+" "+lastName+"']"))
await expect(page.locator("//a[@data-refid='recordId' and @title='"+firstName+" "+lastName+"']")).toContainText(lastName,{timeout:30000})
//await page.click("(//span[text()='Show more actions'])[2]")
await page.click("//span[text()='Show Actions']")
await page.click("//a[@title='Delete']")
await page.click("//span[text()='Delete']")

console.log(`Toast msg is : '${(await page.locator("//span[contains(@class,'toastMessage ')]").innerText())}'`);
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toEqual("Lead \""+firstName+" "+lastName+"\" was deleted. Undo")
await page.locator("//button[contains(@class,'toastClose')]").click()

})


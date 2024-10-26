import { expect, test } from "@playwright/test";
import assert from "assert";


test(`Test to create a Account`, async ({ page }) => {
    const expectedTitle = 'Service Cloud: Unified Customer Service Agent Console | Salesforce US'
    const expectedUrl = 'https://www.salesforce.com/service/cloud/'

    await page.goto("https://login.salesforce.com/");
    await page.fill("//input[@name='username']", "asha.siva.us@gmail.com");
    await page.fill("//input[@name='pw']", "!1Sample");
    await page.click("//input[@name='Login']");

    // const newPagePromise  = page.waitForEvent('popup')
    // await page.click("//span[text()='Learn More']")
    // const newPage = await newPagePromise 

const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//span[text()='Learn More']")
])


    await newPage.url().includes("my.salesforce.com")
    console.log(`Url is : ${newPage.url()}`);
    
    await newPage.click("//button[text()='Confirm']")

    expect(await newPage.title()).toEqual(expectedTitle)
    expect(newPage.url()).toEqual(expectedUrl)



})
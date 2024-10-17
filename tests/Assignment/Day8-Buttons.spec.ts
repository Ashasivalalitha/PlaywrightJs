import { test, expect } from "@playwright/test";
import assert from "assert";


test(`Validate buttons`, async ({page}) => {
page.setDefaultTimeout(60000)
await page.goto("https://leafground.com/button.xhtml")
console.log(`Title before click : '${await page.title()}'`);

await page.locator("//span[text()='Click']").click()
const expectedTitle = 'Dashboard';
await page.waitForFunction((title) => document.title === (title), expectedTitle);
console.log(`Title after click : '${await page.title()}'`);

await page.goBack()
console.log(`Title after navigating to previous screen : '${await page.title()}'`);

//using assert
assert.equal(await page.locator("(//button[@type='button'])[2]").isDisabled(), true)

//using expect
expect(await page.locator("(//button[@type='button'])[2]").isDisabled()).toBe(true)


await page.locator("//span[text()='Image']").click()

//await page.locator("//span[text()='Primary']").click({delay: 3000})
await page.locator("//span[text()='Primary']").click({force: true})

await page.locator("//span[text()='Image']").click()

console.log(`Rounded button count : ${await (page.locator("//button[contains(@class,'rounded-button')]")).count()}`)
})
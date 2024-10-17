import { test, expect } from "@playwright/test";

test(`Test assertion`, async({page}) =>{

    page.setDefaultTimeout(30000)
    await page.goto("https://leafground.com/waits.xhtml")

await page.locator("(//span[text()='Click'])[2]").click()
await expect(await page.locator("//span[text()='I am about to hide']")).not.toBeVisible({timeout:15000})

await page.locator("(//span[text()='Click'])[3]").click()
await expect(await page.locator("//span[text()='Did you notice?']")).toBeVisible()



console.log(await page.locator("//span[text()='Click First Button']").isEnabled());

//await expect(page.locator("//span[text()='Click First Button']")).toBeEnabled()
await page.click("//span[text()='Click First Button']")
console.log(await page.locator("//span[text()='Click Second']").isEnabled());
await page.click("//span[text()='Click Second']")


})
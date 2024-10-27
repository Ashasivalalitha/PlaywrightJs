import { chromium, expect, test } from "@playwright/test";
import assert from "assert";

test.use({storageState:"credential/login-cache.json"})
test(`Test to create a Account`, async () => {
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const expectedUrl = 'https://motorola-2f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home'
    const expectedTitle = 'Home | Salesforce'
    let accountName = "AccountSampleName" + getRandomNumber(1, 1000)

const browser = await chromium.launch()
const context = await browser.newContext({
    recordVideo:{
        dir: './videos',
        size: {
            width: 1000,
            height: 2000
        }
    }
})
    const page = await context.newPage()
    page.setDefaultTimeout(40000);
    await page.goto("https://motorola-2f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")

    await page.waitForURL(expectedUrl, { timeout: 10000 })
    await expect(page).toHaveTitle(expectedTitle)

    assert(await page.url(), expectedUrl)
    assert(await page.title(), expectedTitle);

    await page.click("//div[@class='slds-icon-waffle']")
    await page.click("//button[contains(text(),'View All')]")
    await page.fill("//input[@placeholder='Search apps or items...']", "Service")
    await page.click("(//mark[text()='Service'])[1]")
    await page.click("//span[text()='Accounts']")
    await page.click("//div[text()='New']")
    await page.fill("//input[@name='Name']", accountName)
    await page.click("//button[@name='SaveEdit']")

    //console.log(`Message is '${await page.locator("//span[contains(@class,'toastMessage')]").innerText()}'`);

    let expectedConfirmationMessage = `Account "${accountName}" was created.`
    expect(await page.locator("//span[contains(@class,'toastMessage')]")).toHaveText(expectedConfirmationMessage)


    await page.waitForTimeout(3000);
})

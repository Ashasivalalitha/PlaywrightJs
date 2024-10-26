import { test } from "@playwright/test";

test(`Test to create a Account`, async ({ page }) => {

    await page.goto("https://login.salesforce.com/");

    //Enter username
    await page.fill("//input[@name='username']", "asha.siva.us@gmail.com");

    //Enter password
    await page.fill("//input[@name='pw']", "!1Sample");

    //Click Login
    await page.click("//input[@name='Login']");

    page.context().storageState({path:"credential/login-cache.json"})

})
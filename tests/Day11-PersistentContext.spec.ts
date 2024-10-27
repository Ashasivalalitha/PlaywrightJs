import { chromium, test } from "@playwright/test";

test(`Test persistent context`, async () => {
    const userDataDir = "./userDataDir"
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        permissions:['notifications','geolocation'],
        httpCredentials: {
            username: "admin",
            password: "testleaf"
        }
    })
    //const context = await chromium.launchPersistentContext(userDataDir)
    const page = await context.newPage()
    await page.goto("https://leafground.com/auth.xhtml")
    await page.getByRole("button", { name: "Basic Auth" }).click()
    await page.waitForTimeout(3000)
})
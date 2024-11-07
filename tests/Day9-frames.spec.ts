import { test, expect } from "@playwright/test";

test(`Test frames`, async ({ page }) => {
    test.setTimeout(60000)
    //page.setDefaultNavigationTimeout(60000)
    //page.setDefaultTimeout(60000)

    // await page.route("**", route => {
    //     const url = route.request().url();
    //     if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".css")) {
    //       route.abort(); // Abort images and stylesheets
    //     } else {
    //       route.continue(); // Allow other resources to load
    //     }
    //   });

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm",{waitUntil:"domcontentloaded", timeout:60000})
    //await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    // page.on('dialog',  (dialog) => {
    //      dialog.accept()
    // });

    // page.on('dialog', (dialog) => {
    //     console.log('Alert message:', dialog.message());
    //     dialog.accept(); // Accept the alert synchronously (no async/await)
    //   });



    page.on('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message());
        await dialog.accept();
    });

    // Trigger the action that opens the alert
    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()

    // Remove the dialog event listener after handling the alert
    //   page.off('dialog', async (dialog) => {
    //     await dialog.accept();
    //   });


    // const alertDialog = async (dialog: { accept: () => any; }) => {
    //     await dialog.accept();
    // }


    // page.on('dialog', alertDialog)
    // await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click({ force: true })
    // page.waitForTimeout(3000)
    // page.off('dialog', alertDialog)

    await expect(page.frameLocator("//iframe[@id='iframeResult']").locator("//h2[text()='JavaScript Confirm Box']/following-sibling::p")).toBeVisible({ timeout: 30000 })
    await expect(page.frameLocator("//iframe[@id='iframeResult']").locator("//h2[text()='JavaScript Confirm Box']/following-sibling::p")).toHaveText("You pressed OK!")



})


console.log(`End of test case`);

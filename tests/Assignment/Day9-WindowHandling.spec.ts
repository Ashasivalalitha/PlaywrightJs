import { test, expect } from "@playwright/test";
import assert from "assert";


test(`Test window handling`, async ({ context, page }) => {
    page.setDefaultTimeout(60000)
    const browserContext = page.context()
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("demosalesmanager");
    await page.fill("#password", "crmsfa");
    await page.click(".decorativeSubmit");
    await page.locator("text=CRM/SFA").click({ timeout: 10000 });
    await page.click("//a[text()='Leads']");
    await page.click("//a[text()='Merge Leads']");
//1
    const [newPage1] = await Promise.all([
             page.waitForEvent('popup'),
             page.click("//form//a[contains(@href,'From')]")
    ])
    let windowsCountInWindowsHandling = browserContext.pages().length
    while (windowsCountInWindowsHandling < 2) {
        await page.waitForTimeout(500)
        windowsCountInWindowsHandling = browserContext.pages().length
    }
    console.log(`Windows count: ${windowsCountInWindowsHandling}`);
    await newPage1.bringToFront()
    await newPage1.waitForLoadState()
    //await newPage1.hover("(//table//a[@class='linktext'])[1]")
    await newPage1.hover("(//table[@class='x-grid3-row-table']//td//a)[1]")
    
    //await newPage1.click("(//table//a[@class='linktext'])[1]", {force:true})
    await newPage1.click("(//table[@class='x-grid3-row-table']//td//a)[1]", {force:true})
    await page.waitForTimeout(5000)
    await newPage1.close()

//2
    // const[newPage2] = await Promise.all([
    //      page.waitForEvent('popup'),
    //      page.click("//form//a[contains(@href,'To')]")
    // ])
    // windowsCountInWindowsHandling = browserContext.pages().length
    // while (windowsCountInWindowsHandling < 2) {
    //     await page.waitForTimeout(500)
    //     windowsCountInWindowsHandling = browserContext.pages().length
    // }
    // console.log(`Windows count: ${windowsCountInWindowsHandling}`);
    // await newPage2.waitForLoadState()
    // await newPage2.click("(//table//a[@class='linktext'])[6]")

// await page.waitForTimeout(5000)

    // await Promise.all([
    //     page.waitForEvent('dialog').then(async dialog => {
    //         console.log(`Alert message: ${dialog.message()}`);
    //         console.log(`Alert type: ${dialog.type()}`);
    //         dialog.accept()
    //     }),
    //     page.click("//a[text()='Merge']")  
    // ])
    
    // expect(await page.title()).toEqual("View Lead | opentaps CRM")

})
import { expect, test } from "@playwright/test";
import assert from "assert";


test(`Test to create a Account`, async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const count = page.frames().length
    console.log(`Count is : '${count}'`);



await page.frameLocator("//iframe[@src='default.xhtml']").locator("(//button[text()='Click Me'])[1]").click()
expect(await page.frameLocator("//iframe[@src='default.xhtml']").locator("(//button[@onclick])[1]")).toHaveText("Hurray! You Clicked Me.")


await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']").locator("(//button[text()='Click Me'])[1]").click()
expect(await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']").locator("(//button[@onclick])[1]")).toHaveText("Hurray! You Clicked Me.")


})
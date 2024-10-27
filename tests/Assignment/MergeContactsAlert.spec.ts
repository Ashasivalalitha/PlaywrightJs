// HomeAssignments
// -----------------
//1. MergeContact (Alert and windowHandle)
// -----------
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page

import { test } from "@playwright/test";

test("Merge Contact", async ({ page, context }) => {
  page.once("dialog", async (alertType) => {
    console.log(alertType.type());
    console.log(alertType.message());
    await alertType.accept();
  });
  page.goto(`http://leaftaps.com/opentaps/control/login`);
  await page.locator(`#username`).fill(`demosalesManager`);
  await page.fill(`#password`, "crmsfa");
  await page.click(`.decorativeSubmit`);
  console.log("Main window Title: " + (await page.title()));
  console.log("Main Page Url :" + page.url());
  await page.click("text=CRM/SFA");
  await page.getByText(`Contacts`, { exact: true }).click(); //a[text()='Contacts']
  await page.getByText(`Merge Contacts`, { exact: true }).click(); //a[text()='Merge Contacts']
  const newPage = context.waitForEvent("page");
  await page.click("[name='ComboBox_partyIdFrom'] + input +a");
  const newTab = await newPage;
  await page.waitForTimeout(5000)
  console.log("New Tab title:" + (await newTab.title()));
  await newTab.locator(`(//table[@class='x-grid3-row-table']//td//a)[1]`).click()
  await page.bringToFront();
  console.log("Main window Title:" + (await page.title()));
  await page.click(`[name='ComboBox_partyIdTo'] + input +a`);
  const newPage1 = await context.waitForEvent("page");
  await newPage1.click(`((//table[@class='x-grid3-row-table'])[2]//a)[1]`);

  // Window Closed and return to Main window*/

  //await page.bringToFront();

  await page.waitForTimeout(5000);

  console.log("Main window Title: " + (await page.title()));

  await page.click(`//a[text()='Merge']`);

  //simple alert ok and cancel


  await page.waitForTimeout(5000);

  const title = await page.title();

  console.log(`Title of the page is ${title}`);
});



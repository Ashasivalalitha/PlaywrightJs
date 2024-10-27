import { test } from "@playwright/test";

test("Merge Contact", async ({ page, context }) => {
  page.once("dialog", async (alertType) => {
    console.log(alertType.type());
    console.log(alertType.message());
    await alertType.accept();
  });
  page.goto("http://leaftaps.com/opentaps/control/login");
  await page.locator("#username").fill(demosalesManager);
  await page.fill(#password, "crmsfa");
  await page.click(.decorativeSubmit);
  console.log("Main window Title: " + (await page.title()));
  console.log("Main Page Url :" + page.url());
  await page.click("text=CRM/SFA");
  await page.getByText(Contacts, { exact: true }).click(); //a[text()='Contacts']
  await page.getByText(Merge Contacts, { exact: true }).click(); //a[text()='Merge Contacts']
  const newPage = context.waitForEvent("page");
  await page.click("[name='ComboBox_partyIdFrom'] + input +a");
  const newTab = await newPage;
  console.log("New Tab title:" + (await newTab.title()));
  await newTab.locator((//table[@class='x-grid3-row-table']//td//a)[1]).click()
  await page.bringToFront();
  console.log("Main window Title:" + (await page.title()));
  await page.click([name='ComboBox_partyIdTo'] + input +a);
  const newPage1 = await context.waitForEvent("page");
  await newPage1.click(((//table[@class='x-grid3-row-table'])[2]//a)[1]);

  // Window Closed and return to Main window*/

  //await page.bringToFront();

  await page.waitForTimeout(5000);

  console.log("Main window Title: " + (await page.title()));

  await page.click(//a[text()='Merge']);

  //simple alert ok and cancel


  await page.waitForTimeout(5000);

  const title = await page.title();

  console.log(Title of the page is ${title});
});
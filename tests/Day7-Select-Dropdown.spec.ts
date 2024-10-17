import { test, expect } from "@playwright/test";
import assert from "assert";
import { count } from "console";
//import { arch } from "os";



test(`Test to select dropdown`, async ({ page }) => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let companyName = "CompanyName" + getRandomNumber(1, 1000)
  let firstName = "FirstName" + getRandomNumber(1, 1000)
  let lastName = "LastName" + getRandomNumber(1, 1000)
  let salutation = "Salutation" + getRandomNumber(1, 1000)
  let title = "Title" + getRandomNumber(1, 1000)
  let annualRevenue = getRandomNumber(1, 1000).toString()
  let departmentName = "departmentName" + getRandomNumber(1, 1000)
  let phNumber = getRandomNumber(1000000000, 9999999999).toString()
  let status = "Assigned"

  test.setTimeout(60000)
  page.setDefaultTimeout(40000);
  await page.goto("http://leaftaps.com/opentaps/control/main");


  //Enter username
  await page.locator("#username").fill("demosalesmanager");
  // await page.fill("#username", 'demosalesmanager');


  /* //Using XPath
   await page.locator("//input[@id='username']").fill("demosalesmanager");
   //Using getByLabel
   await page.getByLabel("Username").fill('demosalesmanager');
   //Reusability
   const username = page.locator("#username");
   await username.fill('demosalesmanager');


   const username = page.locator("input[id='usernmae']");
   await username.fill('demosalesmanager'); */


  //Enter password
  await page.fill("#password", "crmsfa");


  //Click Login
  await page.click(".decorativeSubmit");
  //await page.locator(".decorativeSubmit").click();


  //Click CRM/SFA (legacy text)
  await page.locator("text=CRM/SFA").click({ timeout: 10000 });


  //Click Leads
  await page.click("//a[text()='Leads']");
  //await page.getByRole('link', {name:'Leads'}).click();


  //Click Create Lead
  await page.click("//a[text()='Create Lead']");
  //Enter company name
  let companyNameInputField = page.locator("#createLeadForm_companyName");
  await companyNameInputField.fill(companyName);


  //Enter first name
  await page.fill("input[id='createLeadForm_firstName']", firstName);


  //Enter last name
  await page.fill("input[id='createLeadForm_lastName']", lastName);

  await page.selectOption("//select[@id='createLeadForm_dataSourceId']", { label: "Existing Customer" })
  await page.selectOption("//select[@id='createLeadForm_industryEnumId']", { value: "IND_HARDWARE" })
  await page.selectOption("//select[@id='createLeadForm_ownershipEnumId']", { index: 2 })

  await page.selectOption("//select[@id='createLeadForm_dataSourceId']", { label: "Direct Mail" })

  await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", { value: "DEMO_MKTG_CAMP" })
  const count = await page.locator("//select[@id='createLeadForm_marketingCampaignId']/option").count()
  console.log(count);
  console.log();

  const allTextContents = await page.locator("//select[@id='createLeadForm_marketingCampaignId']/option").allTextContents()
  console.log(allTextContents);

  await page.selectOption("//select[@id='createLeadForm_industryEnumId']", { label: "General Services" })
  await page.selectOption("//select[@id='createLeadForm_currencyUomId']", { value: "INR" })
  await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", { label: "Belgium" })
  await page.click("[name='submitButton']");


  await page.waitForTimeout(3000);

})

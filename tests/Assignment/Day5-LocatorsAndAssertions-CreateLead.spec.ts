import { test, expect } from "@playwright/test";
import assert from "assert";
//import { arch } from "os";



test(`Test to create a lead`, async ({page}) => {
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      let companyName = "CompanyName"+getRandomNumber(1,1000)
      let firstName = "FirstName"+getRandomNumber(1,1000)
      let lastName = "LastName"+getRandomNumber(1,1000)
      let salutation = "Salutation"+getRandomNumber(1,1000)
      let title = "Title"+getRandomNumber(1,1000)
      let annualRevenue = getRandomNumber(1,1000).toString()
      let departmentName = "departmentName"+getRandomNumber(1,1000)
      let phNumber = getRandomNumber(1000000000,9999999999).toString()
      let status = "Assigned"


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
    await page.locator("text=CRM/SFA").click({timeout:10000});


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

    await page.fill("input[id='createLeadForm_personalTitle']", salutation);
    await page.fill("input[id='createLeadForm_generalProfTitle']", title);
    await page.fill("//input[@name='annualRevenue']", annualRevenue);
    await page.fill("//input[@name='departmentName']", departmentName)
    await page.fill("input[id='createLeadForm_primaryPhoneNumber']", phNumber);


    //Click Create Lead
    await page.click("[name='submitButton']");


    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    

    //Auto-retrying assertion:
    await expect(page.locator("//span[@id='viewLead_companyName_sp']")).toContainText(companyName, {timeout:10000})
    await expect(page.locator("//span[@id='viewLead_firstName_sp']")).toHaveText(firstName)

    
    //Non-retrying assertion:
    assert.strictEqual(await page.textContent("//span[@id='viewLead_lastName_sp']"),lastName)
    assert.strictEqual(await page.textContent("//span[@id='viewLead_statusId_sp']"), status)

    await page.waitForTimeout(3000);

})

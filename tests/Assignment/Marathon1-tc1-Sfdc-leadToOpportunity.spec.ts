import { test, expect } from "@playwright/test";
import assert from "assert";
//import { arch } from "os";



test(`Test to create a lead and convert to opportunity`, async ({page}) => {
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      let salutation = "Mr."
      let companyName = "CompanyNameMarathon"+getRandomNumber(1,1000)
      let firstName = "FirstNameMarathon"+getRandomNumber(1,1000)
      let lastName = "LastNameMarathon"+getRandomNumber(1,1000)
      let leadName = salutation+" "+firstName+" "+lastName
      console.log(leadName);
      let opportunityName = "opportunityNameMarathon"+getRandomNumber(1,1000)
      console.log(opportunityName);

    page.setDefaultTimeout(40000);
    await page.goto("https://login.salesforce.com/");


    //Enter username
    await page.fill("//input[@name='username']", "asha.siva.us@gmail.com");

    //Enter password
    await page.fill("//input[@name='pw']", "!1Sample");

    //Click Login
    await page.click("//input[@name='Login']");

await page.click("//div[@class='slds-icon-waffle']")
await page.click("//button[contains(text(),'View All')]")
await page.fill("//input[@placeholder='Search apps or items...']", "Marketing")
await page.click("//mark[text()='Marketing']")
await page.click("//span[text()='Leads']")

//await page.click("//button[contains(text(),'List View')]")
await page.click("//div[text()='New']")
await page.click("//button[@name='salutation']")
await page.click("//lightning-base-combobox-item[@data-value='"+salutation+"']")
await page.fill("//input[@name='firstName']", firstName)
await page.fill("//input[@name='lastName']", lastName)
await page.fill("//input[@name='Company']",companyName)
await page.click("//button[contains(text(),'Save') and not(contains(text(),'New'))]")
await expect(page.locator("//span[contains(@class,'toastMessage')]")).toBeVisible()

await page.locator("(//li[contains(@class,'dropdown-trigger')]//lightning-button-menu/button)[1]").click({force:true})
await page.click("//span[text()='Convert']")
await page.click("//button[@title='"+companyName+"-']")
await page.fill("(//input[@class=' input' and (contains(@aria-labelledby,'required'))])[3]",opportunityName)
await page.click("//button[contains(text(),'Convert')]")
await page.click("//button[contains(text(),'Go to Leads')]")

await page.fill("//input[@name='Lead-search-input']",leadName)
await page.click("//input[@name='Lead-search-input']")
await page.locator("//input[@name='Lead-search-input']").press('Enter')
//await page.keyboard.press('Enter');

await expect(page.locator("//div[contains(@class,'emptyContent') and not(contains(@class,'hidden'))]/div//span")).toHaveText("No items to display.")

await page.click("//span[text()='Opportunities']")
await page.fill("//input[@name='Opportunity-search-input']", opportunityName)
await page.click("//input[@name='Opportunity-search-input']")
await page.locator("//input[@name='Opportunity-search-input']").press('Enter')
//await page.keyboard.press('Enter');
expect(await page.locator("(//a[@data-refid])[1]").getAttribute("title")).toEqual(opportunityName)


})

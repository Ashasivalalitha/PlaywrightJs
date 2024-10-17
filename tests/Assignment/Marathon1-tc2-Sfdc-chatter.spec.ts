import { test, expect } from "@playwright/test";
import assert from "assert";


test(`Test sfdc chatter`, async({page}) => {
    test.setTimeout(60000)
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      let salutation = "Mr."
      let companyName = "CompanyNameMarathon"+getRandomNumber(1,1000)
      let firstName = "FirstNameMarathon"+getRandomNumber(1,1000)
      let lastName = "LastNameMarathon"+getRandomNumber(1,1000)
      let accountName = "AccountNameMarathon"+getRandomNumber(1,1000)
      let accountNumber = getRandomNumber(100000,100000000)
      let updateMessage = "This is an update from "+salutation+" "+firstName

page.goto("https://login.salesforce.com/")

    //Enter username
    await page.fill("//input[@name='username']", "asha.siva.us@gmail.com");

    //Enter password
    await page.fill("//input[@name='pw']", "!1Sample");

    //Click Login
    await page.click("//input[@name='Login']");

await page.click("//div[@class='slds-icon-waffle']")
await page.click("//button[contains(text(),'View All')]")
await page.fill("//input[@placeholder='Search apps or items...']", "Service")
await page.click("//mark[text()='Service']")
await page.click("//span[text()='Cases']")
await page.click("//a[@title='New']")


//new contact
await page.click("//input[@placeholder='Search Contacts...']")
await page.locator("//span[text()='New Contact']").scrollIntoViewIfNeeded()
await page.click("//span[text()='New Contact']")
await page.click("//button[@name='salutation']")
await page.click("//span[text()='"+salutation+"']")
await page.locator("//input[@name='firstName']").scrollIntoViewIfNeeded()
await page.fill("//input[@name='firstName']", firstName)
await page.locator("//input[@name='lastName']").scrollIntoViewIfNeeded()
await page.fill("//input[@name='lastName']", lastName)
await page.click("(//button[@name='SaveEdit'])[2]")
console.log(`Toast msg is : '${(await page.locator("//span[contains(@class,'toastMessage ')]").innerText())}'`);
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toEqual("Contact \""+salutation+" "+firstName+" "+lastName+"\" was created.")
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toContain("Contact")
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toContain("was created.")
expect(await page.locator("//span/a[@class='forceActionLink']/div").innerText()).toEqual(salutation+" "+firstName+" "+lastName)
await page.locator("//button[contains(@class,'toastClose')]").click()

// await page.evaluate(() => {
//     const element = document.evaluate("//button[contains(@class,'toastClose')]//svg", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     element?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
//   });
  


//new account
await page.click("//input[@placeholder='Search Accounts...']")
await page.locator("//span[text()='New Account']").scrollIntoViewIfNeeded()
await page.click("//span[text()='New Account']")
await page.locator("//input[@name='Name']").scrollIntoViewIfNeeded()
await page.fill("//input[@name='Name']", accountName)
await page.locator("//input[@name='AccountNumber']").scrollIntoViewIfNeeded()
await page.fill("//input[@name='AccountNumber']", accountNumber.toString())
await page.click("//button[@aria-label='Rating']")
await page.click("//span[text()='Hot']")
await page.click("(//button[@name='SaveEdit'])[2]")
console.log(`Toast msg is : '${(await page.locator("//span[contains(@class,'toastMessage ')]").innerText())}'`);
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toEqual("Account \""+accountName+"\" was created.")
await page.locator("//button[contains(@class,'toastClose')]").click()

//saving case
await page.click("//button[@aria-label='Status']")
await page.click("//div[@aria-label='Status']//span[text()='New']")
await page.click("//button[@aria-label='Priority']")
await page.click("//div[@aria-label='Priority']//span[text()='High']")
await page.click("//button[@aria-label='Case Origin']")
await page.click("//div[@aria-label='Case Origin']//span[text()='Email']")
await page.fill("//input[@name='Subject']", "Product Return Request")
await page.fill("//label[contains(text(),'Description')]/following-sibling::div/textarea", "Requesting a  return for a defective product")
await page.click("//button[@name='SaveEdit']")
console.log(`Toast msg is : '${(await page.locator("//span[contains(@class,'toastMessage ')]").innerText())}'`);
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toContain("Case")
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toContain("was created.")
await page.locator("//button[contains(@class,'toastClose')]").click()


//edit and updates
await page.click("//button[@title='Edit Status']")
await page.click("//label[contains(text(),'Status')]/following-sibling::div//button")
await page.click("//div[@aria-label='Status']//span[text()='Escalated']")
await page.click("//button[@name='SaveEdit']")
expect(await page.locator("//div[contains(@data-target-selection-name,'Status')]//lightning-formatted-text").innerText()).toEqual("Escalated")
await expect(await page.locator("//span[text()='Share an update...']")).toBeVisible()
await page.click("//span[text()='Share an update...']")
await expect(await page.locator("//div[@data-placeholder='Share an update...']/p")).toBeEnabled({timeout:15000})
await page.fill("//div[@data-placeholder='Share an update...']/p",updateMessage)
await page.click("//button[contains(text(),'Share')]")
expect(await page.locator("//span[text()='To: Internal']/ancestor::div[contains(@class,'feedItemHeader')]/following-sibling::div[@class]//span").innerText()).toEqual(updateMessage)
await page.click("//span[text()='To: Internal']/ancestor::div[contains(@class,'slds-size')]/following-sibling::div/a")
await page.click("//span[contains(text(),'Like on Chatter')]")
expect(await page.locator("//span[contains(@class,'toastMessage ')]").innerText()).toEqual("Post was liked.")
await page.locator("//button[contains(@class,'toastClose')]").click()

//chatter
await page.locator("//span[text()='Chatter']").click({force:true})
expect(await page.locator("//span[text()='"+updateMessage+"']/ancestor::div[contains(@class,'cuf-body')]/following-sibling::footer//span[@title='Unlike']")).toBeVisible({timeout:15000})
console.log(`'${await page.locator("//span[text()='"+updateMessage+"']/ancestor::div[contains(@class,'cuf-body')]/following-sibling::footer//span[@title='Unlike']").innerText()}'`);
await page.locator("//span[text()='"+updateMessage+"']/ancestor::div[contains(@class,'cuf-body')]/following-sibling::footer//span[@title='Unlike']").highlight()
expect(await page.locator("//span[text()='"+updateMessage+"']/ancestor::div[contains(@class,'cuf-body')]/following-sibling::footer//span[@title='Unlike']").innerText()).toContain("Liked")


})
import { test } from "@playwright/test";


test(`Test to create a lead`, async ({page}) => {

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      let companyName = "CompanyName"+getRandomNumber(1,100)
      let annualRevenue = getRandomNumber(1,100).toString()
      let departmentName = "departmentName"+getRandomNumber(1,100)
      let description = "description"+getRandomNumber(1,100)
      

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


    await page.click("//a[text()='Find Leads']");
    await page.fill("//div[@id='findLeads']//input[@name='firstName']", "FirstNameOne")
    await page.click("//button[text()='Find Leads']")
    //await page.click("(//div[contains(@class,'scroller')]//a)[1]")
    await page.click("//a[text()='FirstNameOne']")
    await page.click("//a[text()='Edit']")

    await page.fill("//span[text()='Company Name']/parent::td/following-sibling::td/input[@name='companyName']", companyName)
    await page.fill("//input[@name='annualRevenue']", annualRevenue);
    await page.fill("//input[@name='departmentName']", departmentName)
    await page.fill("//textarea[@name='description']", description)
    await page.click("//input[@type='submit' and @value='Update']")

    if((await page.innerText("//span[@id='viewLead_companyName_sp']")).includes(companyName))
      console.log(`Company name '${companyName}' is updated correctly`);
    else
    console.log("Company name is NOT updated correctly");
      
    if((await page.innerText("//span[@id='viewLead_annualRevenue_sp']")).includes(annualRevenue))
      console.log(`Annual revenue '${annualRevenue}' is updated correctly`);
    else
    console.log("Annual revenue is NOT updated correctly");

    if(await page.innerText("//span[@id='viewLead_departmentName_sp']")==departmentName)
      console.log(`Department name '${departmentName}' is updated correctly`);
    else
    console.log("Department name is NOT updated correctly");


    if(await page.innerText("//span[@id='viewLead_description_sp']")==description)
      console.log(`Description '${description}' is updated correctly`);
    else
    console.log("Description is NOT updated correctly");


    //Get the status
    // console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    
    await page.waitForTimeout(3000);
})


import { test,expect } from "@playwright/test";

test(`Test dropdown`, async ({ page }) => {
    let brazilCities = ['Rio de Janerio', 'Salvador', 'Sao Paulo']
    let germanyCities = ['Berlin', 'Frankfurt', 'Munich']
    let indiaCities = ['Bengaluru', 'Chennai', 'Delhi']
    let usaCities = ['Denver', 'New York', 'San Francisco']
    let perferredCountry = 'Germany'

    await page.goto("https://leafground.com/select.xhtml")

    await page.selectOption("//select[@class='ui-selectonemenu']", { label: "Playwright" })

    let count = await page.locator("//select[@class='ui-selectonemenu']/option").count()
    console.log(`Count : ${count}`);

    let listOfItems = await page.locator("//select[@class='ui-selectonemenu']/option").allTextContents()
    console.log(`List of items : ${listOfItems}`);

    await page.locator("//h5[text()='Choose your preferred country.']/parent::div//div[contains(@class,'ui-selectonemenu')]/span").click()
    await page.locator("//li[contains(@id,'country') and text()='" + perferredCountry + "']").click()

    await expect(page.locator("//select[contains(@id,'city_input')]/option")).not.toHaveCount(1)
    let allTextContents = await page.locator("//select[contains(@id,'city_input')]/option").allTextContents()
    allTextContents.shift()

    console.log(allTextContents);

    if (perferredCountry == "Brazil") {
        for(let i=0; i<perferredCountry.length; i++){
            if(allTextContents[i]==brazilCities[i])
                continue
            else
            console.error(`Country and cities do not match`);
        }
    }

    if (perferredCountry == "Germany") {
        for(let i=0; i<perferredCountry.length; i++){
            if(allTextContents[i]==germanyCities[i])
                continue
            else
            console.error(`Country and cities do not match`);
        }
    }

    if (perferredCountry == "India") {
        for(let i=0; i<perferredCountry.length; i++){
            if(allTextContents[i]==indiaCities[i])
                continue
            else
            console.error(`Country and cities do not match`);
        }
    }

    if (perferredCountry == "USA") {
        for(let i=0; i<perferredCountry.length; i++){
            if(allTextContents[i]==usaCities[i])
                continue
            else
            console.error(`Country and cities do not match`);
        }
    }


    console.log(`Cities '${allTextContents}' match the country '${perferredCountry}'`);


    //choose course
    await page.click("//h5[text()='Choose the Course']/parent::div//span[contains(@class,'triangle')]")
    await page.click("//li[text()='Appium']")
    await page.click("//h5[text()='Choose the Course']/parent::div//span[contains(@class,'triangle')]")
    await page.click("//li[text()='Selenium WebDriver']")
    await page.click("//h5[text()='Choose the Course']/parent::div//span[contains(@class,'triangle')]")
    await page.click("//li[text()='Playwright']")
    //await page.click("//h5[text()='Choose the Course']/parent::div//span[contains(@class,'triangle')]")

    //choose language
    const lang = 'English'
    //await page.click("//h5[text()='Choose language randomly']/parent::div//span[contains(@class,'triangle')]")
    //await page.locator("//h5[text()='Choose language randomly']/parent::div//span[contains(@class,'triangle')]").click({force:true})
    await page.locator("//h5[contains(text(),'Choose language randomly')]/parent::div//span[contains(@class,'triangle')]").click()
    await page.click("//li[text()='"+lang+"']");
    console.log('Languages:');
    
    const langList = (await page.locator("//li[text()='Select Language']/following-sibling::li").all())
    for(let i=0; i<langList.length; i++)
        console.log(await langList[i].innerText());
    await page.waitForTimeout(2000)

    //choose 2
    //await page.click("//h5[contains(text(),\"Select 'Two' irrespective of the language chosen\")]/parent::div//span[contains(@class,'triangle')]")
    await page.locator("//h5[contains(text(),'irrespective of the language chosen')]/parent::div//span[contains(@class,'triangle')]/parent::div").click()
    //await page.locator("//h5[contains(text(),'irrespective of the language chosen')]/parent::div//div[@role='combobox']").click({force:true})
    //await page.locator("//h5[contains(text(), concat('Select ', \"'\", 'Two', \"'\", ' irrespective of the language chosen'))]/parent::div//span[contains(@class,'triangle')]").click({force: true});
    await page.click("//li[contains(@id,'value_2')]")

    //await page.waitForTimeout(5000)
})
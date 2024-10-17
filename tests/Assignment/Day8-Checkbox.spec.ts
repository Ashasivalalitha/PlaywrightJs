import { test , expect } from "@playwright/test";

test(`Validate checkboxes`, async({page}) => {

await page.goto("https://leafground.com/checkbox.xhtml")

//basic
await page.locator("//span[text()='Basic']/preceding-sibling::div[not(contains(@class,'hidden'))]").click()

//ajax
await page.locator("//span[text()='Ajax']/preceding-sibling::div[not(contains(@class,'hidden'))]").click()
expect(await page.locator("//div[@class='ui-growl-message']/span[@class='ui-growl-title']").innerText()).toBe('Checked')

//select language
await page.locator("//label[text()='Javascript']/parent::td/div/div[contains(@class,'chkbox')]").click()

//tri state
//console.log(`Tri state checkbox checked status before selection: ${await page.locator("//div[contains(@id,'TriState')]/div[contains(@class,'chkbox')]").isChecked()}`)
console.log(`Tri state checkbox checked status before selection: ${(await page.locator("//div[contains(@id,'TriState')]/div[contains(@class,'chkbox')]").getAttribute("class"))?.includes("active")}`)
await page.locator("//div[contains(@id,'TriState')]/div[contains(@class,'chkbox')]").click()
//console.log(`Tri state checkbox checked status after selection: ${await page.locator("//div[contains(@id,'TriState')]/div[contains(@class,'chkbox')]").isChecked()}`)
console.log(`Tri state checkbox checked status before selection: ${(await page.locator("//div[contains(@id,'TriState')]/div[contains(@class,'chkbox')]").getAttribute("class"))?.includes("active")}`)


//toggle
await page.locator("//div[@class='ui-toggleswitch-slider']").click()


//disabled
//console.log(`Disabled checkbox status : ${await page.locator("//span[text()='Disabled']/preceding-sibling::div[not(contains(@class,'hidden'))]/span").isDisabled()}`)
console.log(`Disabled checkbox status : ${(await page.locator("//span[text()='Disabled']/preceding-sibling::div[not(contains(@class,'hidden'))]").getAttribute("class"))?.includes("disabled")}`)


//multiple selection
let city = ['London', 'Paris']
let selectedCities:string[] = []
await page.locator("//ul[@data-label='Cities']").click()
await page.locator("//label[text()='"+city[0]+"']/preceding-sibling::div/div[not(contains(@class,'hidden'))]").click()
await page.locator("//label[text()='"+city[1]+"']/preceding-sibling::div/div[not(contains(@class,'hidden'))]").click()
await page.locator("//ul[@data-label='Cities']").click()

let allSelectedCities = await page.locator("//ul[@data-label='Cities']/li/span[not(contains(@class,'close'))]").all()
allSelectedCities.forEach(async(element) => {
    let data = await element.innerText()
    selectedCities.push(data)
    console.log(selectedCities);
});

// console.log(city);
 console.log(selectedCities);



if(city==selectedCities){
    console.log(selectedCities);
console.log(`Cities are selected correctly`);
}
else
console.error(`Cities are not selected correctly`)
//await page.waitForTimeout(5000)
})
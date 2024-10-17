import { test, expect } from "@playwright/test";
import assert from "assert";


test(`Validate radio buttons`, async ({page}) => {
page.setDefaultTimeout(60000)
await page.goto("https://leafground.com/radio.xhtml")


//assert default selected checkbox
let defaultSelectedRadioButtons = ['Safari', '21-40 Years']
let actualDefaultSelectedRadioButtons:string[] = []

let actualDefaultSelectedRadioButtons_locators = await page.locator("//div[contains(@class,'ui-state-active')]/parent::div/following-sibling::label[not(contains(@for,'config-form'))]").all()

for(let i=0; i<actualDefaultSelectedRadioButtons_locators.length-1; i++)
    actualDefaultSelectedRadioButtons.push(await actualDefaultSelectedRadioButtons_locators[i].innerText())

if(defaultSelectedRadioButtons==actualDefaultSelectedRadioButtons){
console.log(`Default radio buttons are validated correctly`);
}
else
console.log(`Default radio buttons are validated correctly`);


//select browser and assert selection
console.log(`Checkbox status before browser selection : ${await page.locator("(//h5[text()='Your most favorite browser']/parent::div//div[contains(@class,'radiobutton')]//input)[1]").isChecked()}`)
await page.click("(//h5[text()='Your most favorite browser']/parent::div//div[contains(@class,'radiobutton')]/div/following-sibling::div)[1]")
console.log(`Checkbox status after browser selection : ${await page.locator("(//h5[text()='Your most favorite browser']/parent::div//div[contains(@class,'radiobutton')]//input)[1]").isChecked()}`)
assert.equal(await page.locator("(//h5[text()='Your most favorite browser']/parent::div//div[contains(@class,'radiobutton')]//input)[1]").isChecked(), true)

//select city
await page.click("//label[text()='Chennai']/preceding-sibling::div/div[contains(@class,'radiobutton')]")

//select age and assert selection
console.log(`Checkbox status before age selection : ${await page.locator("//label[text()='1-20 Years']/preceding-sibling::div//input").isChecked()}`)
await page.click("//label[text()='1-20 Years']/preceding-sibling::div/div[contains(@class,'radiobutton')]")
console.log(`Checkbox status after age selection : ${await page.locator("//label[text()='1-20 Years']/preceding-sibling::div//input").isChecked()}`)
assert.equal(await page.locator("//label[text()='1-20 Years']/preceding-sibling::div//input").isChecked(), true)

await page.waitForTimeout(15000)

})
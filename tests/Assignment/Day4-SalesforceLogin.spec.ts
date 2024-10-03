import { chromium, test } from "@playwright/test";

test('Login to Salesforce', async() => {
const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://site-page-48762.my.salesforce.com");

let url = page.url();
console.log(`Launch Url is ${url}`);

let title = await page.title();
console.log(`Launch Title is ${title}`);

let usernameInputField =  page.locator("//input[@name='username']");
await usernameInputField.fill('ashasiva.10002000-xtdz@force.com');

let passwordInputField =  page.locator("//input[@name='pw']");
await passwordInputField.fill('!1Sample');

let loginButton =  page.locator("//input[@name='Login']");
await loginButton.click();

await page.waitForTimeout(10000);

url = page.url();
console.log(`Current Url is ${url}`);

title = await page.title();
console.log(`Current Title is ${title}`);

await page.close();
await context.close();
await browser.close();


})
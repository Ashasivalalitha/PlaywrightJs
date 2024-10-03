import { chromium, firefox, test } from "@playwright/test";


test(`Launch RedBus in Edge`, async () => {
const browser = await chromium.launch({headless:false, channel:"msedge"});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redbus.in");
await page.waitForTimeout(5000)
const url = page.url()
console.log(`RedBus url is ${url}`);
const title = await page.title()
console.log(`RedBus title is ${title}`);
})

test(`Launch Flipkart in FF`, async () => {
    const browser = await firefox.launch({headless:false, channel:"firefox"});
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.flipkart.co");
    await page.waitForTimeout(5000)
    const url = page.url()
    console.log(`Flipkart url is ${url}`);
    const title = await page.title()
    console.log(`Flipkart title is ${title}`);
    })


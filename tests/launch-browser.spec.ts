
import { chromium, firefox, test } from "@playwright/test";


test(`Test to launch the browser`, async () => {

//Create a browser instance
//const browser = await chromium.launch({headless:false, channel: "msedge"});
const browser = await chromium.launch({headless: false, channel:"msedge"});


//Create the browser context
const context = await browser.newContext();


//Create a new page
const page = await context.newPage();


//Load the url
await page.goto("http://leaftaps.com/opentaps/control/main");


//Get the url of the page
const url = page.url();
console.log(`The url of the page is ${url}`);

//Get the title of the page
const title = await page.title();
console.log(`The title of the page is ${title}`);


//Gracefully clearing the resources
//Close the page
await page.close();


//Close the browser context
await context.close();


//Close the browser
await browser.close();

} )


test.only(`Test to launch the browser using firefox`, async () => {

//Create a browser instance

const browser = await firefox.launch();


//Create the browser context
const context = await browser.newContext();


//Create a new page
const page = await context.newPage();


//Load the url
await page.goto("http://leaftaps.com/opentaps/control/main");


//Get the url of the page
const url = page.url();
console.log(`The url of the page is ${url}`);

//Get the title of the page
const title = await page.title();
console.log(`The title of the page is ${title}`);


await page.waitForTimeout(3000);

//Gracefully clearing the resources
//Close the page
await page.close();


//Close the browser context
await context.close();


//Close the browser
await browser.close();

} )
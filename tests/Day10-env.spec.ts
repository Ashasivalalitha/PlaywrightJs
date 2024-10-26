import { test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

const environment = process.env.NODE_ENV || 'testing';
//const envPath = path.join(__dirname,`../../testdata/${environment}.env`);
const envPath = path.join(__dirname,`../testdata/${environment}.env`);
console.log(envPath);

dotenv.config({path:envPath})


test(`Test environment`, async({page})=>{

    const usertest= process.env.username as string
    const passtest= process.env.password as string
    await page.goto("https://login.salesforce.com/")
    //Enter username
    await page.fill("//input[@name='username']", usertest );

    await page.waitForTimeout(5000)

    //Enter password
    await page.fill("//input[@name='pw']", passtest );
    await page.waitForTimeout(5000)
})



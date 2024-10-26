import { test } from "@playwright/test";
import fs from "fs";
import path from "path";

const loginData = JSON.parse(fs.readFileSync(path.join(__dirname,"../testdata/usersInJson.json"),'utf-8'))
for(const credential of loginData){

test(`Login as user - ${credential.userid}`, async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.fill("//input[@name='username']", credential.username);
    await page.fill("//input[@name='pw']", credential.password);
    await page.waitForTimeout(3000)
})





}
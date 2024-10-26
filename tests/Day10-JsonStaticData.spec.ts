import { test } from "@playwright/test";
import loginDataFromJson from "../testdata/usersInJson.json";

loginDataFromJson.forEach(eachUser => {


    test(`Login as user - ${eachUser.userid}`, async({page})=>{
        await page.goto("https://login.salesforce.com/")
        await page.fill("//input[@name='username']", eachUser.username);
        await page.fill("//input[@name='pw']", eachUser.password);
        await page.waitForTimeout(3000)
    })



});
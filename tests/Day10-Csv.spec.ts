import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

//import Papa from 'papaparse';
//import { skip } from "node:test";

//const loginData_csv = Papa.parse(fs.readFileSync(path.join(__dirname,"../testdata/usersInCsv.csv"),'utf-8'), {
    // columns:true,
    // skip_empty_lines:true
    // header: true,          // Parses CSV with headers as keys
    // skipEmptyLines: true,  // Ignores empty lines

//})


const loginData_csv:any = parse(fs.readFileSync(path.join(__dirname,"../testdata/usersInCsv.csv"),'utf-8'),{
    columns: true,
    skip_empty_lines:true
})

for(const credential of loginData_csv){

    test(`Login as user - ${credential.testid}`, async({page})=>{
        await page.goto("https://login.salesforce.com/")
        await page.fill("//input[@name='username']", credential.username);
        await page.fill("//input[@name='pw']", credential.password);
        await page.waitForTimeout(3000)
    })


}
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


test(`Test login page`, async() => {
const loginPage = new LoginPage();
await loginPage.initialize()
await loginPage.navigateTo("https://motorola12-dev-ed.develop.my.salesforce.com")
await loginPage.login("ashasiva.10002000@gmail.com","!1Sample")
await loginPage.closeBrowser()

})
import { test, expect } from "@playwright/test";


test(`Test frames`, async({page}) => {

page.goto("https://signon.service-now.com/x_snc_sso_auth.do?pageId=username")
page.fill("//input[contains(@class,'UF-validate UF-default-validation')]","asha.siva.us@gmail.com")
page.click("//button[@id='username_submit_button']")
page.fill("//input[@name='password']","!1Mynewworld")
page.click("//button[@id='password_submit_button']")




})
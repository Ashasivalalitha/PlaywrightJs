import { Browser,BrowserContext,Page,chromium } from "playwright";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

usernameSelector:string
passwordSelector:string
loginButtonSelector:string

    constructor() {
        super()
        this.usernameSelector = "#username"
        this.passwordSelector = "#password"
        this.loginButtonSelector = "#Login"

    }

    public async login(username:string, password:string): Promise<void>{
     await this.page.fill(this.usernameSelector, username)
     await this.page.fill(this.passwordSelector, password)
     await this.page.click(this.loginButtonSelector)
    }


}
import { Browser,BrowserContext,Page,chromium } from "playwright";


export class BasePage {

    // public browser:any
    // public browserContext:any
    // public page:any


    protected browser: Browser;
    protected context: BrowserContext;
    protected page: Page;
    //protected nname:any

    // constructor() {
    //     this.browser = null as any
    //     this.context = null as any
    //     this.page = null as any

    // }

    constructor() {
        //this refers to the instance of the class
        this.browser = null as any;
        this.context = null as any;
        this.page = null as any;
    }


    public async initialize(): Promise<void>{
     this.browser = await chromium.launch({headless:false})
     this.context = await this.browser.newContext()
     this.page = await this.context.newPage()

    }

    public async navigateTo(url:string){
        await this.page.goto(url)
    }

    public async closeBrowser(){
        await this.browser.close()
    }

}
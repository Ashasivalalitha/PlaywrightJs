

type supportedBrowser = "Chrome" | "Edge"
type browserVersion = "127" | "128"
//type browserProfile = supportedBrowser & browserVersion
type browserProfile = {
    browserName : supportedBrowser
    version : browserVersion
}


const chromeBrowser : browserProfile = {
    browserName : "Chrome",
    version : "127"
}

const edgeBrowser : browserProfile = {
    browserName : "Edge",
    version : "128"
}

// browserProfile.browser = "Chrome"
// browserProfile.version = 128


function launchBrowser(browser: browserProfile) {
    if(browser.browserName=="Chrome" && browser.version=="127")
        console.log("Launch Chrome with version 127");
    else if(browser.browserName=="Chrome" && browser.version=="128")
        console.log("Launch Chrome with version 128");

    if(browser.browserName=="Edge" && browser.version=="127")
        console.log("Launch Edge with version 127");
    else if(browser.browserName=="Edge" && browser.version=="128")
        console.log("Launch Edge with version 128");
}

launchBrowser(edgeBrowser)

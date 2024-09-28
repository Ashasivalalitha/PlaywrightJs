let browserName = 'nedge'
let testType = 'regrekssion'

function launchBrowser(browserName){
    if(browserName==='chrome')
        console.log("Browser is " + browserName);
    else if(browserName==='firefox')
        console.log("Browser is " + browserName);
    else if(browserName==='firefox')
        console.log("Browser is " + browserName);
    else if(browserName==='edge')
        console.log("Browser is " + browserName);
    else 
        console.log(browserName + " - Unsupported browser");
}

function runTests(testType){
    switch (testType) {
        case 'smoke':
            console.log("Test type is "+testType);
            break;
        case 'sanity':
            console.log("Test type is "+testType);
            break;
        case 'regression':
            console.log("Test type is "+testType);
            break;
        default:
            console.log(testType + " - Invalid Test type");
            break;
    }
}


launchBrowser(browserName)
runTests(testType)

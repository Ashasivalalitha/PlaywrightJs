enum environment {
    local = "LOCAL",
    dev = "DEVELOPMENT",
    stage = "STAGING",
    prod = "PRODUCTION"
}

function runTests(env:environment): void {
console.log(`Environment is '${env}'`);

}


runTests(environment.stage)
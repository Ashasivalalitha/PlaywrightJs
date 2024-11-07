import { test, expect, chromium } from "@playwright/test";

    async function get_SF_OAuthToken() {
        const request=(await (await chromium.launch()).newContext()).request
    const response_SF = await request.post(
        "https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG9XgkMlifdwVDmhsW7nXH_.ARVg57Q4DteVKo5070JqObRmUm_AUs_fEAxG.jc.M0OEUGFb1Q8D4UKeRLc",
                "client_secret": "80B42BEB92E10298086709D4B1943D481040514957C6B1B6802754C5358492F6",
                "username": "ashasiva.10002000@gmail.com",
                "password": "!1Sample"
            }
        }
    )

    const responseBody_SF = await response_SF.json()
    console.log(responseBody_SF);

    const responseStatus = response_SF.status()
    console.log(`Status is '${responseStatus}'`);

    expect(responseStatus, `Expected status is 201`).toBe(200)

    //accessToken = responseBody.access_token;
    //console.log(`Access token is '${accessToken}'`);

    // instUrl = responseBody.instance_url;
    // console.log(`Instance url is '${instUrl}'`);

    return{
        accessToken_SF:responseBody_SF.access_token,
        instUrl_SF:responseBody_SF.instance_url,
    }

}

export {get_SF_OAuthToken}

const { expect } = require("@playwright/test");

exports.LaunchApplication = class LaunchApplication
{
    constructor(page,urlpart)
    {
      this.page = page ;  
      this.urlpart = urlpart;
     }

async LaunchApp_And_SignInPage_AIDemo()
{
   
    await this.page.goto('https://www.assetinfinity.com/');
    await this.page.getByText('Sign In',{exact:true}).first().click();
    const [SingInPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            await this.page.getByText('v2 (app.assetinfinity.io)').click()
          ])
    return SingInPage;
}

async LaunchApp_And_SignInPage()
{

await this.page.goto('https://'+this.urlpart+'.assetinfinity.io/');

}

}
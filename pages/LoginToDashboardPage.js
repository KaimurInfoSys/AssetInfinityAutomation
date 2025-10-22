const { expect } = require("@playwright/test");

exports.LoginToDashboardPage = class LoginToDashboardPage
{
    constructor(page)
    {
      this.page = page ;   
    }

async User_Login_LoadDashboard_AIDemo(_company,_uname,_passwd)
{
await this.page.waitForURL('https://app.assetinfinity.io/Organization');
await this.page.getByText('Enter your organization').click();
await this.page.locator('input[name="company"]').fill(_company);
await this.page.locator("#kt_organization_submit").click();
await this.page.waitForURL('https://app.assetinfinity.io/Login');
    
await expect(this.page.locator('#company-heading')).toHaveText('Sign In to perceint');
    
await this.page.locator('input[name="email"]').first().fill(_uname);
await this.page.locator('input[name="password"]').first().fill(_passwd);
await this.page.getByText('Sign In',{exact:true}).first().click();
        //await page.locator("#kt_sign_in_submit").first().click();
    
await this.page.waitForURL('https://app.assetinfinity.io/Dashboards');
await expect(this.page.locator('h1>>span').getByText('Dashboards')).toBeVisible();
await expect(this.page.locator('#logo_link')).toBeVisible();

}

async User_Login_LoadDashboard(_company,_uname,_passwd)
{
await this.page.waitForURL('https://app-autom.assetinfinity.io/Organization');
await this.page.getByText('Enter your organization').click();
await this.page.locator('input[name="company"]').fill(_company);

await this.page.locator("form[id=\"kt_organization_form\"]>>div>>button[id=\"kt_organization_submit\"]").click();

await this.page.waitForTimeout(10000);

await this.page.waitForURL('https://app-autom.assetinfinity.io/Login');
    
await expect(this.page.locator('#company-heading')).toHaveText('Sign In to '+_company);
    
await this.page.locator('#asset-infinity-login-button').click();

await this.page.locator('input[name="email"]').first().fill(_uname);
await this.page.locator('input[name="password"]').first().fill(_passwd);
await this.page.getByText('Sign In',{exact:true}).first().click();
        //await page.locator("#kt_sign_in_submit").first().click();
    
await this.page.waitForURL('https://app-autom.assetinfinity.io/Dashboards');
await expect(this.page.locator('h1>>span').getByText('Dashboards')).toBeVisible();
await expect(this.page.locator('#logo_link')).toBeVisible();

}

async Back_toDashboard()
{
  await this.page.locator('a>>span[class="menu-title"]>>text=Dashboards').click();
}

}
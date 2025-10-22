// @ts-check
const { test, expect } = require("@playwright/test");
import { LaunchApplication } from "../pages/LaunchApplication";
import {LoginToDashboardPage} from "../pages/LoginToDashboardPage";
import { Asset_Management } from "../pages/asset_management";
import {user1} from "../testdata/testdatafile1.json"


// @ts-ignore

let _launchpage = new LaunchApplication;
let _signInpage = new LoginToDashboardPage;
let _assetmgt = new Asset_Management;


test.describe('Asset Infinity Full Run',()=>
{

let page;
test.beforeAll(async ({ browser }) =>{
  const context = await browser.newContext();
  page = await context.newPage();
  
  /* calling inital variables for page objects */
    _launchpage = new LaunchApplication(page);
     const _tempsignpage = await  _launchpage.LaunchApp_And_SignInPage();
     _signInpage = new LoginToDashboardPage(_tempsignpage);
     _assetmgt = new Asset_Management(_tempsignpage);
   
     /* calling common functions*/
     await _signInpage.User_Login_LoadDashboard(user1.Organization,user1.UserEmail,user1.Password);

});

test.afterAll(async ({browser}) =>
{ browser.close();

});


test('TC01 - View Asset ', async ({ }) => {
    
    await _assetmgt.View_asset(user1.assetcode);


});

test('TC02 - Add Asset ', async ({ }) => {
  await _signInpage.Back_toDashboard();
  await _assetmgt.Add_Asset('Laptop');

});




});


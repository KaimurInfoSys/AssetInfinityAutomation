// @ts-check
const { test, expect } = require("@playwright/test");

import { LaunchApplication } from "../pages/LaunchApplication";
import {LoginToDashboardPage} from "../pages/LoginToDashboardPage";
import { Asset_Management } from "../pages/Asset_Management";

import {user1} from "../testdata/testdatafile1.json"

// @ts-ignore

let _launchpage = new LaunchApplication;
let _signInpage = new LoginToDashboardPage;
let _assetmgt = new Asset_Management;




test.beforeEach(async ({ page }) => {

  _launchpage = new LaunchApplication(page);
   //const _tempsignpage = await  _launchpage.LaunchApp_And_SignInPage();
   _signInpage = new LoginToDashboardPage(page);
   _assetmgt = new Asset_Management(page);

  });

test.only('TC01 - Login to application', async ({ page}) => {
    
await _launchpage.LaunchApp_And_SignInPage();
await _signInpage.User_Login_LoadDashboard(user1.Organization,user1.UserEmail,user1.Password);

});

test('TC02 - View Asset ', async ({ page}) => {
  
    await _signInpage.User_Login_LoadDashboard(user1.Organization,user1.UserEmail,user1.Password);
    await _assetmgt.View_asset(user1.assetcode);

});

test('TC03 - Add Asset ', async ({ page}) => {
  
    await _signInpage.User_Login_LoadDashboard(user1.Organization,user1.UserEmail,user1.Password);
    await _assetmgt.Add_Asset(user1.Newassetname);

});


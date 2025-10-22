/*import { test as base } from '@playwright/test';
import { LaunchAndLogin_ToDashboard } from './pages/LaunchApplication';
import { Asset_Management } from './pages/Asset_Management';

// Extend base test by providing "todoPage" and "settingsPage".

// const MyFixtures = {
//   launchpage: null, // Replace with actual TodoPage instance
//   assetmanagepage: null // Replace with actual SettingsPage instance
// };

const test = base.extend({

  launchpage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new LaunchAndLogin_ToDashboard(page);
    // other item from fixure come here.
  },

  assetpage: async ({ page }, use) => {
    await use(new LaunchAndLogin_ToDashboard(page));
  },

});

const { expect } = require('@playwright/test');

*/
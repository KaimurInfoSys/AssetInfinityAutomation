// @ts-check
import { test, expect } from '@playwright/test';

test(' launch test', async ({ page }) => {

   await page.goto('https://www.assetinfinity.com/');

   /* await page.getByRole('button',{name: 'signin'});
   await page.locator('control 1 ').locator('control 2').click();
   await page.locator('control 1 >> control 2') */

});


const { expect } = require("@playwright/test");

exports.Booking_Setting = class Booking_Setting
{
    constructor(page)
    {
      this.page = page ;   
    }

async Create_NewBooking_Setting()
{
await this.page.locator('a>>span>>text=Equipment Booking').click();
await this.page.locator('a>>span>>text=Booking Settings').click();

await this.page.locator('div')
//.filter( {has: this.page.locator('select[name="reservedStatusId"][data-key="statusId"]')})
.filter({ hasText: 'Reserved Status' })
.locator('span>>text=Select an option').nth(2).click();

await this.page.getByRole('option', { name: 'Checked Out', exact: true }).click();


//Exclude Equipment Type while Reservation


await this.page.locator('div')
.filter({ hasText: 'Exclude Equipment Type while Reservation' })
.locator('textarea').nth(0).click();

await this.page.waitForTimeout(3000)

await this.page.locator('div')
.filter({ hasText: 'Exclude Equipment Type while Reservation' })
.locator('textarea').nth(0).fill('consumables');

await this.page.getByRole('gridcell', { name: ' Press Space to toggle row' }).getByLabel('Press Space to toggle row').check();
//

await this.page.locator('label>>text=Exclude Equipments by Status').click();
/*
await this.page.locator('div')
//.filter({ has:  this.page.locator('label>>text=Exclude Equipments by Status') })
.locator('textarea[placeholder="Select one or more option(s)"]').nth(0).click();
*/
await this.page
.locator('textarea:below(:text("Exclude Equipments by Status"))').nth(0).click();


await this.page.getByRole('option', { name: 'Checked Out for Maintenance' }).click();
  await this.page.getByRole('option', { name: 'Missing' }).click();

await this.page.locator('label>>text=Exclude Equipments by Status').click();


await this.page
.locator('textarea:below(:text("Exclude Assets Under below Conditions"))').nth(0).click();


await this.page.getByRole('option', { name: 'Non-functional' }).click();
await this.page.getByRole('option', { name: 'Fully Functional' }).click();

await this.page.locator('label>>text=Exclude Assets Under below Conditions').click();

await this.page.locator('input[name="isBillingConsumable"]').click();

await this.page.locator('div>>text=Billing Data Configuration').click();


await this.page
.locator('textarea:below(:text("Billing Days"))').nth(0).click();


await this.page
.locator('textarea:below(:text("Billing Days"))').nth(0).fill("prince george");

//await this.page.getByRole('gridcell', { name: ' Press Space to toggle row' }).getByLabel('Press Space to toggle row').nth(0).check();
  await this.page.getByRole('gridcell', { name: 'Press Space to toggle row selection (unchecked)  Prince George (3456 Opie' }).getByLabel('Press Space to toggle row').check();

await this.page.locator('input[data-label="Number of Days"]').click();
await this.page.locator('input[data-label="Number of Days"]').fill('0');

await this.page.locator('div>>text=Billing Data Configuration').click();



await this.page.locator('div>>text=Billing ERP Email To').nth(0).click();



await this.page
.locator('textarea:below(:text("Billing ERP Mail"))').nth(0).click();

await this.page
.locator('textarea:below(:text("Billing ERP Mail"))').nth(0).fill("prince");

await this.page.waitForTimeout(3000)

await this.page.getByRole('gridcell', { name: 'Press Space to toggle row selection (unchecked)  Prince George (3456 Opie' }).getByLabel('Press Space to toggle row').check();

await this.page
.locator('textarea:below(:text("Billing ERP Mail"))').nth(1).fill("faisal.hasan@assetinfinity.com");

await this.page.waitForTimeout(3000)


await this.page.getByRole('option', { name: 'faisal.hasan@assetinfinity.com'}).click();



await this.page
.locator('[type=submit]:below(:text("Billing ERP Mail"))').click();


await this.page.waitForTimeout(10000)


}


}
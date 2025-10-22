// @ts-check
const { test, expect } = require("@playwright/test");
// @ts-ignore

test('Launch and Login to Application', async ({ page,context }) => {
  
    await page.goto('https://www.assetinfinity.com/');
    await page.getByText('Sign In',{exact:true}).first().click();

    const [MainPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByText('v2 (app.assetinfinity.io)').click()
      ])
      

    await MainPage.waitForURL('https://app.assetinfinity.io/Organization');
    await MainPage.getByText('Enter your organization').click();
    await MainPage.locator('input[name="company"]').fill('perceint');
    await MainPage.locator("#kt_organization_submit").click();
    await MainPage.waitForURL('https://app.assetinfinity.io/Login');

    await expect(MainPage.locator('#company-heading')).toHaveText('Sign In to perceint');

    await MainPage.locator('input[name="email"]').first().fill('yatife5405@perceint.com');
    await MainPage.locator('input[name="password"]').first().fill('Anonymous@108963');
    await MainPage.getByText('Sign In',{exact:true}).first().click();
    //await page.locator("#kt_sign_in_submit").first().click();

   await MainPage.waitForURL('https://app.assetinfinity.io/Dashboards');
   await expect(MainPage.locator('h1>>span').getByText('Dashboards')).toBeVisible();
   await expect(MainPage.locator('#logo_link')).toBeVisible();

   // need to add email and user also

   // test case 1 
 /*  // view asset list
await MainPage.locator('span[class="menu-title"]>>text=Asset List').click();

 
await MainPage.waitForTimeout(30000);
var assetcodecolnum=0;
const allcols = await MainPage.locator('div[role="columnheader"]>>span[ref="eText"]').count();
console.log("allcols : "+allcols);
for(let i=0;i < allcols ;i++)
{
   if(await MainPage.locator('div[role="columnheader"]>>span[ref="eText"]').nth(i).textContent() == 'Asset Code' )
   {
    assetcodecolnum=i;
    console.log("assetcodecolnum : "+assetcodecolnum);
   }
}

//console.log(await MainPage.locator('div[role="gridcell"][aria-colindex="5"]').allInnerTexts());
console.log(await MainPage.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").allInnerTexts());

const allassetcodecol = await MainPage.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").count();

for(let i=0;i < allassetcodecol ;i++)
  {
     let tempdata= await MainPage.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").nth(i).textContent();
     console.log(" AssetCode Returned "+tempdata);
     if( tempdata == 'AST201914656' )
     {
      //click on eye
      //await MainPage.locator('span>>a[data-bs-original-title="Asset View"]>>i[class="fas fa fa-eye"]').nth(i).click();
      console.log(" data metched and index "+tempdata,i);

      await MainPage.locator('a[aria-label="Asset View"]').nth(i-1).click();
      await MainPage.waitForTimeout(10000);
      {break;}


     }
  }

// end of view asset list 
*/

// add asset 
/*

await MainPage.locator('span[class="menu-title"]>>text=Add Asset').click();

await MainPage.locator('input[name=\'assetName\'][type=\'text\']').fill('Laptop');
//let cat_area = MainPage.locator('label').getByText('Category',{exact:true});

await MainPage.locator('div')
.filter({ hasText:'Category'}).locator('textarea').first().click();
await MainPage.locator('span').getByText('Furniture & Fixtures').click();

//await MainPage.locator('textarea').nth(1).click();
await MainPage.locator('div')
.filter({ hasText:'Location'}).locator('textarea').nth(1).click();

await MainPage.getByText('Central Warehouse').click();

await MainPage.getByRole('combobox', { name: 'Select an option' }).click();
await MainPage.getByRole('option', { name: 'In Use' }).click();

await MainPage.getByText('Allotted Information').click();
await MainPage.locator('div').filter({ hasText: /^Transferred ToLoading\.\.\.Select an option$/ }).getByLabel('Select an option').click();

await MainPage.locator('#kt_content_container input[type="search"]').click();
await MainPage.locator('#kt_content_container input[type="search"]').fill('yatife5405@perceint.com');
await MainPage.getByRole('option', { name: 'Anonymous Developer (' }).click();
await MainPage.getByRole('button', { name: 'Save' }).click();


await MainPage.waitForTimeout(10000);
*/

});


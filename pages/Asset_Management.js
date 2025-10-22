
const {expect } = require("@playwright/test");
const {Login_Module} = require("./LaunchApplication");

exports.Asset_Management = class Asset_Management 
{
   
constructor(page)
{
   this.page = page;
   
}


async View_asset(_assetcode)
{
await this.page.locator('span[class="menu-title"]>>text=Asset List').click();
  
 
await this.page.waitForTimeout(30000);
var assetcodecolnum=0;
const allcols = await this.page.locator('div[role="columnheader"]>>span[ref="eText"]').count();
console.log("allcols : "+allcols);
for(let i=0;i < allcols ;i++)
{
   if(await this.page.locator('div[role="columnheader"]>>span[ref="eText"]').nth(i).textContent() == 'Asset Code' )
   {
    assetcodecolnum=i;
    console.log("assetcodecolnum : "+assetcodecolnum);
   }
}

//console.log(await MainPage.locator('div[role="gridcell"][aria-colindex="5"]').allInnerTexts());
console.log(await this.page.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").allInnerTexts());

const allassetcodecol = await this.page.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").count();

for(let i=0;i < allassetcodecol ;i++)
  {
     let tempdata= await this.page.locator("div[role='gridcell'][aria-colindex='"+(assetcodecolnum+2)+"']").nth(i).textContent();
     console.log(" AssetCode Returned "+tempdata);
     if( tempdata == _assetcode )//'AST201914656'
     {
      //click on eye
      //await MainPage.locator('span>>a[data-bs-original-title="Asset View"]>>i[class="fas fa fa-eye"]').nth(i).click();
      console.log(" data metched and index "+tempdata,i);

      await this.page.locator('a[aria-label="Asset View"]').nth(i-1).click();
      await this.page.waitForTimeout(5000);
      
      await this.page.locator('div[class="modal-form-parent"]>>button>>text=Cancel').click();
      {break;}


     }
  }
}

async new_ticket()
{
   await this.page.locator('span[class="menu-title"]>>text=new ticket List').click();


}


async Add_Asset(_assetname)
{
   await this.page.waitForTimeout(5000);
   await this.page.locator('span[class="menu-title"]>>text=Add Asset').click();

   await this.page.locator('input[name=\'assetName\'][type=\'text\']').fill(_assetname);//'Laptop'
   //let cat_area = MainPage.locator('label').getByText('Category',{exact:true});
   
   await this.page.locator('div')
   .filter({ hasText:'Category'}).locator('textarea').first().click();
   await this.page.locator('span').getByText('Furniture & Fixtures').click();
  
   //await MainPage.locator('textarea').nth(1).click();
   await this.page.locator('div')
   .filter({ hasText:'Location'}).locator('textarea').nth(1).click();
   
   await this.page.getByText('Central Warehouse').click();
   
   
   await this.page.getByRole('combobox', { name: 'Select an option' }).click();
   await this.page.getByRole('option', { name: 'In Use' }).click();
   
   await this.page.getByText('Allotted Information').click();
   await this.page.locator('div').filter({ hasText: /^Transferred ToLoading\.\.\.Select an option$/ }).getByLabel('Select an option').click();
   
   await this.page.locator('#kt_content_container input[type="search"]').click();
   await this.page.locator('#kt_content_container input[type="search"]').fill('yatife5405@perceint.com');
   await this.page.getByRole('option', { name: 'Anonymous Developer (' }).click();
   await this.page.getByRole('button', { name: 'Save' }).click();
   
   
   await this.page.waitForTimeout(10000);
   
  

}



};
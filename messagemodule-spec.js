describe('Verify Company Admin users page and Header Menus', function() {
    browser.waitForAngularEnabled(false);
    {
    // Verify the message module submenus.   
    it('Click on the message menu', function() {
    //Verify the message menu Available in the page
               var Messagemenu = element(by.linkText('Message'));
                expect(Messagemenu.isDisplayed()).toBeTruthy(); 
                });
    }
});
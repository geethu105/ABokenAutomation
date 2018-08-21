describe('Verify Company Admin users page', function() {
    browser.waitForAngularEnabled(false);
//Test Case 1 - Verify the Home menu is available
it('Verify the Home menu', function() {

//Verify the Home menu Available in the page
        
    var Homemenu = element(by.linkText('Home'));
    expect(Homemenu.isDisplayed()).toBeTruthy(); 
    });
});  
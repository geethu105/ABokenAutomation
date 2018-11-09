describe('Verify Company Admin users page and Header Menus', function() {
    browser.waitForAngularEnabled(false);
//Test Case 1 - Verify the Home menu is available
it('Verify the Home menu', function() {
//Verify the Home menu Available in the page
    var Homemenu = element(by.linkText('Home'));
    expect(Homemenu.isDisplayed()).toBeTruthy(); 
    });

//Test Case 2 - Verify the Message menu is available
it('Verify the message menu', function() {
//Verify the message menu Available in the page
   var Messagemenu = element(by.linkText('Message'));
    expect(Messagemenu.isDisplayed()).toBeTruthy(); 
    });

//Test Case 3 - Verify the Calendar menu is available
it('Verify the Calendar menu', function() {
    //Verify the Calendar menu Available in the page
       var Calendarmenu = element(by.linkText('Calendar'));
        expect(Calendarmenu.isDisplayed()).toBeTruthy(); 
        });

//Test Case 4 - Verify the Basic scheduling menu is available
it('Verify the Basic scheduling menu', function() {
    //Verify the Basic scheduling menu Available in the page
       var Basicschedulingmenu = element(by.linkText('Basic scheduling'));
        expect(Basicschedulingmenu.isDisplayed()).toBeTruthy(); 
        });

//Test Case 5 - Verify the Reports menu is available
it('Verify the Reports menu', function() {
    //Verify the Reports menu Available in the page
       var Reportsmenu = element(by.linkText('Reports'));
        expect(Reportsmenu.isDisplayed()).toBeTruthy(); 
        });

//Test Case 6 - Verify the Patient menu is available
it('Verify the Patient menu', function() {
    //Verify the Patient menu Available in the page
       var Patientmenu = element(by.linkText('Patient'));
        expect(Patientmenu.isDisplayed()).toBeTruthy(); 
        });

//Test Case 7 - Verify the Users menu is available
it('Verify the Users menu', function() {
    //Verify the Users menu Available in the page
       var Usersmenu = element(by.linkText('Users'));
        expect(Usersmenu.isDisplayed()).toBeTruthy(); 
        });

//Test Case 8 - Verify the Company menu is available
it('Verify the Company menu', function() {
    //Verify the Company menu Available in the page
       var Companymenu = element(by.linkText('QA AB Test'));
        expect(Companymenu.isDisplayed()).toBeTruthy(); 
        });
});  
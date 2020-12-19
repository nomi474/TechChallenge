import {Given, Then, And} from 'cypress-cucumber-preprocessor/steps';
import {LoginPage} from '../../page-objects/login-page';
import {CommonPage} from '../../page-objects/common-page';
import {SecurePage} from '../../page-objects/secure-page';

let loginPage = new LoginPage();
let commonPage = new CommonPage();
let securePage = new SecurePage();

Given(/^I am on Heroku login page$/, function(){
    loginPage.gotoHomePage();
});

Then(/^I verify page header$/, function(){
    loginPage.verifyLoginPageHeader();
});

And(/^I verify login page message$/, function(){
    loginPage.verifyLoginPageText();
});

And(/^I verify username label$/, function(){
    loginPage.verifyUsernamLabel();
});

And(/^I verify password label$/, function(){
    loginPage.verifyPassordLabel();
});

And(/^I verify Fork me on github link$/, function(){
    commonPage.verifyGithubRepoLink();
});

And(/^I verify page footer$/, function(){
    commonPage.verifyLoginPageFooter();
});

And(/^I verify Elemental Selenium link$/, function(){
    commonPage.verifyElementalSelLink();
});

And(/^I log in with correct credentials$/, function(){
    loginPage.login();
});

And(/^I verify being redirected to Secure area page$/, function(){
    securePage.verifySecurePageUrl();
});

And(/^I verify Secure Area page message$/, function(){
    securePage.verifySecureAreaMessage();

});

And(/^I verify Secure Area page header$/, function(){
    securePage.verifySecureAreaHeader();
});

And(/^I verify Secure Area page sub header$/, function(){
    securePage.verifySecurePageSubHeading();
});


And(/^I click on Logout button$/, function(){
    securePage.logout();
});

Then(/^I verify being redirected to Login page$/, function(){
    loginPage.verifyLoginPageUrl();
});


And(/^I try to log in with incorrect username$/, function(){
    loginPage.inputWrongUsername('wrongName');
});


And(/^I verify invaid username message$/, function(){
    loginPage.verifyInvalidUsernameMsg();
});

And(/^I try to log in with incorrect password$/, function(){
    loginPage.inputWrongPassword('wrongPassword');
});

And(/^I verify invaid password message$/, function(){
    loginPage.verifyInvalidPasswordMsg();
});
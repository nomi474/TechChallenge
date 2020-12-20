import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    loginPageHeader: '.example h2',
    loginPageMessage: 'h4.subheader',
    usernameLBL: 'label[for="username"]',
    usernameTXT: 'input#username',
    passwordLBL: 'label[for="password"]',
    passwordTXT: 'input#password',
    loginBTN: 'button[type="submit"]',
    loginPageUrl: '/login',
    invalidPasswordMsg: 'Your password is invalid!',
    invalidUsernameMsg: 'Your username is invalid!',
    loginPageHeading: 'Login Page',
};

let commonPage = new CommonPage();

export class LoginPage extends BasePage {
    /**
     *  take the user to the home page of the application
     */
    gotoHomePage(){
        cy.visit(locators.loginPageUrl);
    }

    /**
     * verifies Page heading for the Login page
     */
    verifyLoginPageHeader(){
        this.shouldBeVisible(locators.loginPageHeader);
        cy.get(locators.loginPageHeader).contains(locators.loginPageHeading);
    }

    /**
     * verifies the detailed text message for the Login page.
     */
    verifyLoginPageText(){
        this.shouldBeVisible(locators.loginPageMessage);
        cy.get(locators.loginPageMessage).contains('This is where you can log into the secure area. Enter ');
    }

    /**
     * 
     */
    verifyUsernamLabel(){
        this.shouldBeVisible(locators.usernameLBL);
    }

    /**
     * 
     */
    verifyPassordLabel(){
        this.shouldBeVisible(locators.passwordLBL);
    }

    /**
     * 
     */
    login(){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(userDetail.username);
            cy.get(locators.passwordTXT).type(userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    /**
     * 
     */
    verifyLoginPageUrl(){
        this.verifyUrl(locators.loginPageUrl);
    }

    /**
     * 
     * @param {*} wrongUser 
     */
    inputWrongUsername(wrongUser){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(wrongUser);
            cy.get(locators.passwordTXT).type(userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    /**
     * 
     */
    verifyInvalidUsernameMsg(){
        commonPage.verifyFlashMessage(locators.invalidUsernameMsg, false);
    }

/**
 * 
 * @param {*} wrongPasswd 
 */
    inputWrongPassword(wrongPasswd){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(userDetail.username);
            cy.get(locators.passwordTXT).type(wrongPasswd);
        });
        this.getButton(locators.loginBTN).click();
    }

    /**
     * 
     */
    verifyInvalidPasswordMsg(){
        commonPage.verifyFlashMessage(locators.invalidPasswordMsg, false);
    }

}
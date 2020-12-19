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
};

let commonPage = new CommonPage();

export class LoginPage extends BasePage {
    gotoHomePage(){
        cy.visit(locators.loginPageUrl);
    }

    verifyLoginPageHeader(){
        this.shouldBeVisible(locators.loginPageHeader);
    }

    verifyLoginPageText(){
        this.shouldBeVisible(locators.loginPageMessage);
    }

    verifyUsernamLabel(){
        this.shouldBeVisible(locators.usernameLBL);
    }

    verifyPassordLabel(){
        this.shouldBeVisible(locators.passwordLBL);
    }

    login(){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(userDetail.username);
            cy.get(locators.passwordTXT).type(userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    
    verifyLoginPageUrl(){
        this.verifyUrl(locators.loginPageUrl);
    }

    inputWrongUsername(wrongUser){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(wrongUser);
            cy.get(locators.passwordTXT).type(userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    verifyInvalidUsernameMsg(){
        commonPage.verifyFlashMessage(locators.invalidUsernameMsg, false);
    }


    inputWrongPassword(wrongPasswd){
        cy.fixture('account.json').then((userDetail) =>{
            cy.get(locators.usernameTXT).type(userDetail.username);
            cy.get(locators.passwordTXT).type(wrongPasswd);
        });
        this.getButton(locators.loginBTN).click();
    }

    verifyInvalidPasswordMsg(){
        commonPage.verifyFlashMessage(locators.invalidPasswordMsg, false);
    }

}
import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    loginPageHeader: '.example h2',
    loginPageMessage: 'h4.subheader',
    usernameLBL: 'label[for="username"]',
    usernameTXT: '#username',
    passwordLBL: 'label[for="password"]',
    passwordTXT: '#password',
    loginBTN: 'button[type="submit"]'
};

let commonPage = new CommonPage();

/**
 * Page object class for Heroku internet Login page
 */
export class LoginPage extends BasePage {
    /**
     *  take the user to the home page of the application
     */
    gotoLoginPage(){
        cy.visit('/login');
    }

    /**
     * verifies Page heading for the Login page
     */
    verifyLoginPageHeader(){
        this.shouldBeVisible(locators.loginPageHeader);
        cy.get(locators.loginPageHeader).contains('Login Page');
    }

    /**
     * verifies the detailed text message for the Login page.
     */
    verifyLoginPageText(){
        this.shouldBeVisible(locators.loginPageMessage);
        cy.get(locators.loginPageMessage).contains('This is where you can log into the secure area. Enter ');
    }

    /**
     * verifies existence of label = username on the login page
     */
    verifyUsernamLabel(){
        this.shouldBeVisible(locators.usernameLBL);
    }

    /**
     * verifies existence of label = password on the login page
     */
    verifyPassordLabel(){
        this.shouldBeVisible(locators.passwordLBL);
    }

    /**
     * This function logs in the user by inputting the user credetials and 
     * then pressing the Login button.
     */
    login(){
        cy.fixture('account.json').then((userDetail) =>{
            this.inputText(locators.usernameTXT,userDetail.username);
            this.inputText(locators.passwordTXT,userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    /**
     * This function verifies that the current url is for the Heroku internet login page
     */
    verifyLoginPageUrl(){
        this.verifyUrl(Cypress.config().baseUrl + '/login');
    }

    /**
     * Negative test
     * @param {*} wrongUser 
     * This function takes wrong user name as input 
     */
    inputWrongUsername(wrongUser){
        cy.fixture('account.json').then((userDetail) =>{
            this.inputText(locators.usernameTXT,wrongUser);
            this.inputText(locators.passwordTXT,userDetail.password);
        });
        this.getButton(locators.loginBTN).click();
    }

    /**
     * This function verifies "invalid username" error message
     * when incorrect username is provided for logging in
     */
    verifyInvalidUsernameMsg(){
        commonPage.verifyFlashMessage('Your username is invalid!', false);
    }

/**
 * Negative test
 * @param {*} wrongPasswd 
 * This function takes wrong user name as input 
 */
    inputWrongPassword(wrongPasswd){
        cy.fixture('account.json').then((userDetail) =>{
            this.inputText(locators.usernameTXT,userDetail.username);
            this.inputText(locators.passwordTXT,wrongPasswd);
            
        });
        this.getButton(locators.loginBTN).click();
    }

    /* 
    * This function verifies "invalid password" error message
     * when incorrect password is provided for logging in
     */
    verifyInvalidPasswordMsg(){
        commonPage.verifyFlashMessage('Your password is invalid!', false);
    }

    /**
     * Negative test
     * This function verifies that incorrect username provided message is shown if
     * no username or password is provided 
     */
    noUsernameOrPassword(){
        this.getButton(locators.loginBTN).click();
    }

}
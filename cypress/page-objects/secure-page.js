import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    securePageUrl: Cypress.config().baseUrl + '/secure',
    secureAreaMsgLBL: 'div#flash',
    securePageHeader: '.example h2',
    securePageSubheader: 'h4.subheader',
    logoutBTN: 'a[href="/logout"]',
    secureAreaMsg: 'You logged into a secure area!',
    securePageSubHeading: 'Welcome to the Secure Area. When you are done click logout below.'
};

let commonPage = new CommonPage();
export class SecurePage extends BasePage {

    verifySecurePageUrl(){
        this.verifyUrl(locators.securePageUrl);
    }

    verifySecureAreaHeader(){
        this.shouldBeVisible(locators.securePageHeader);
        cy.get(locators.securePageHeader).contains('Secure Area');
    }

    verifySecureAreaMessage(){
        commonPage.verifyFlashMessage(locators.secureAreaMsg, true);
    }

    verifySecurePageSubHeading(){
        this.shouldBeVisible(locators.securePageSubheader);
        cy.get(locators.securePageSubheader).contains(locators.securePageSubHeading);
    }

    logout(){
        this.getButton(locators.logoutBTN).click();
    }
}
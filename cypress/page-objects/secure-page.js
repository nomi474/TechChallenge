import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    securePageUrl: Cypress.config().baseUrl + '/secure',
    secureAreaMsgLBL: 'div#flash',
    securePageHeader: '.example h2',
    securePageSubheader: 'h4.subheader',
    logoutBTN: 'a[href="/logout"]',
    secureAreaMsg: 'You logged into a secure area!',
    securePageSubHeading: 'Welcome to the Secure Area. When you are done click logout below.',
    securePageHeading: 'Secure Area'
};

let commonPage = new CommonPage();
export class SecurePage extends BasePage {

    /**
     * Verifies that the user has landed on the Secure page after logging in.
     */
    verifySecurePageUrl(){
        this.verifyUrl(locators.securePageUrl);
    }

    /**
     * Verifies "Secure Area" header on the Secure page.
     */
    verifySecureAreaHeader(){
        this.shouldBeVisible(locators.securePageHeader);
        cy.get(locators.securePageHeader).contains(locators.securePageHeading);
    }

    /**
     * Verifies the successful login message.
     */
    verifySecureAreaMessage(){
        commonPage.verifyFlashMessage(locators.secureAreaMsg, true);
    }

    /**
     * Verifies text message/sub heading on the Secure page.
     */
    verifySecurePageSubHeading(){
        this.shouldBeVisible(locators.securePageSubheader);
        cy.get(locators.securePageSubheader).contains(locators.securePageSubHeading);
    }

    /**
     * Logs user out of the secure page.
     */
    logout(){
        this.getButton(locators.logoutBTN).click();
    }
}
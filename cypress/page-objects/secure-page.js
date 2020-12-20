import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    secureAreaMsgLBL: 'div#flash',
    securePageHeader: '.example h2',
    securePageSubheader: 'h4.subheader',
    logoutBTN: 'a[href="/logout"]'
};

let commonPage = new CommonPage();
export class SecurePage extends BasePage {

    /**
     * Verifies that the user has landed on the Secure page after logging in.
     */
    verifySecurePageUrl(){
        this.verifyUrl(Cypress.config().baseUrl + '/secure');
    }

    /**
     * Verifies "Secure Area" header on the Secure page.
     */
    verifySecureAreaHeader(){
        this.shouldBeVisible(locators.securePageHeader);
        cy.get(locators.securePageHeader).contains('Secure Area');
    }

    /**
     * Verifies the successful login message.
     */
    verifySecureAreaMessage(){
        commonPage.verifyFlashMessage('You logged into a secure area!', true);
    }

    /**
     * Verifies text message/sub heading on the Secure page.
     */
    verifySecurePageSubHeading(){
        this.shouldBeVisible(locators.securePageSubheader);
        cy.get(locators.securePageSubheader)
        .contains('Welcome to the Secure Area. When you are done click logout below.');
    }

    /**
     * Logs user out of the secure page.
     */
    logout(){
        this.getButton(locators.logoutBTN).click();
    }
}
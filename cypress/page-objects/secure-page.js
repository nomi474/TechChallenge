import {BasePage} from './base-page';
import {CommonPage} from './common-page';

const locators = {
    securePageUrl: 'https://the-internet.herokuapp.com/secure',
    secureAreaMsgLBL: 'div#flash',
    securePageHeader: '.example h2',
    securePageSubheader: 'h4.subheader',
    logoutBTN: 'a[href="/logout"]',
    secureAreaMsg: 'You logged into a secure area!',

};

let commonPage = new CommonPage();
export class SecurePage extends BasePage {

    verifySecurePageUrl(){
        this.verifyUrl(locators.securePageUrl);
    }

    verifySecureAreaHeader(){
        this.shouldBeVisible(locators.securePageHeader);
    }

    verifySecureAreaMessage(){
        commonPage.verifyFlashMessage(locators.secureAreaMsg, true);
    }

    verifySecurePageSubHeading(){
        this.shouldBeVisible(locators.securePageSubheader);
    }

    logout(){
        this.getButton(locators.logoutBTN).click();
    }
}
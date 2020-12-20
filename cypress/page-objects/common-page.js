import {BasePage} from './base-page';

const locators = {
    footerMsgLBL: 'div[style="text-align: center;"]',
    elementalSeleniumLINK: 'div#page-footer a',
    forkMeGithubBadge: 'a > img',
    forkMeGihubLINK: 'div.row a',
    closeMsgBTN: 'a.close',
    flashMsgModal:'div#flash',
}

/**
 * This class contains functions for verifying page elements that are common for multiple pages.
 */
export class CommonPage extends BasePage {
    /**
     * Verifies 'Fork me on Github' banner and link
     */
    verifyGithubRepoLink(){
        this.shouldBeVisible(locators.forkMeGithubBadge);
        cy.get(locators.forkMeGihubLINK)
        .should('have.attr', 'href').and('include', 'github')
        .then((href) => {
            cy.request(href).its('body').should('include', '</html>')
        })
    }

    /**
     * Verifies that the footer exists on the page
     */
    verifyPageFooter(){
        this.shouldBeVisible(locators.footerMsgLBL);

    }

    /**
     * Verifies Elemental Selenium link on the page.
     */
    verifyElementalSelLink(){
        this.shouldBeVisible(locators.elementalSeleniumLINK);
        this.clickOnLink(locators.elementalSeleniumLINK);
        this.verifyUrl('http://elementalselenium.com/');
        cy.go('back');
    }

    /**
     * 
     * @param {*} message 
     * @param {*} success 
     * This function verifies that
     * a. If login is successful, success message appears on the page with green color background.
     * b.If login fails, failure message appears on the page with red color background.
     */
    verifyFlashMessage(message, success){
        this.shouldBeVisible(locators.flashMsgModal);
        cy.get(locators.flashMsgModal).contains(message);
        if(success == true){
            cy.get(locators.flashMsgModal).should('have.css', 'background-color', 'rgb(93, 164, 35)');
            cy.get(locators.flashMsgModal).should('have.css', 'border-color', 'rgb(69, 122, 26)')
        }else if(success == false){
            cy.get(locators.flashMsgModal).should('have.css', 'background-color', 'rgb(198, 15, 19)');
            cy.get(locators.flashMsgModal).should('have.css', 'border-color', 'rgb(151, 11, 14)')
        }
        this.getButton(locators.closeMsgBTN).click({force: true});
        this.shouldBeVisible(locators.flashMsgModal);
    }
}
import {BasePage} from './base-page';

const locators = {
    footerMsgLBL: 'div[style="text-align: center;"]',
    elementalSeleniumLINK: 'div#page-footer a',
    forkMeGithubBadge: 'a > img',
    forkMeGihubLINK: 'div.row a',
    closeMsgBTN: 'a.close',
    flashMsgModal:'div#flash',
    githubUrl: 'https://github.com/saucelabs/the-internet',
    elementalSeleniumUrl: 'http://elementalselenium.com/',

}

export class CommonPage extends BasePage {
    verifyGithubRepoLink(){
        this.shouldBeVisible(locators.forkMeGithubBadge);
        cy.get(locators.forkMeGihubLINK)
        .should('have.attr', 'href').and('include', 'github')
        .then((href) => {
            cy.request(href).its('body').should('include', '</html>')
        })
    }

    verifyLoginPageFooter(){
        this.shouldBeVisible(locators.footerMsgLBL);

    }

    verifyElementalSelLink(){
        this.shouldBeVisible(locators.elementalSeleniumLINK);
        this.clickOnLink(locators.elementalSeleniumLINK);
        this.verifyUrl(locators.elementalSeleniumUrl);
        cy.go('back');
    }

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
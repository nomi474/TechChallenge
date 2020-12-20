/// <reference types="cypress"/>

/*
    In the framework module, we create a class called BasePage.
    All page object classes will extend the BasePage, thus inheriting all the base methods.
 */

export class BasePage {
  /*locatorType : this should be one of these - 'class' , 'id', 'name' , 'text' , 'title'
   * attributeValue : is the value of locator
   */
  clickOnLink(locator) {
    try {
      cy.get(locator).then(($el) => {
        if ($el.attr('target')) {
          cy.get(locator).first().invoke('removeAttr', 'target').click();
        } else {
          cy.get(locator).click();
        }
      });
    } catch (err) {
      cy.log(err.message);
    }
  }

  /**
   * 
   * @param {*} locator 
   * @param {*} text 
   * function for inputting text in a text box.
   */
  inputText(locator, text) {
    try {
      cy.get(locator).should('be.enabled').type(text);
    } catch (err) {
      cy.log(err.message);
    }
  }

/**
 * 
 * @param {*} locator 
 * function for clicking a page element.
 */
  clickElement(locator) {
    try {
      cy.get(locator).should('be.visible').click({ force: true });
    } catch (err) {
      cy.log(err.message);
    }
  }

  /**
   * 
   * @param {*} urlText 
   * This function verifies that the current url is the same as the provided url text.
   */
  verifyUrl(urlText) {
    try {
      cy.url().should('contain', urlText);
    } catch (err) {
      cy.log(err.message);
    }
  }

  /**
   * 
   * @param {*} locator 
   * Cypress assertion for verifying that an element is visible on the web page.
   */
  shouldBeVisible(locator) {
    cy.get(locator).should('be.visible');
  }

  /**
   * 
   * @param {*} locator 
   * Cypress assertion for verifying that an element is not visible on the web page.
   */
  shouldNotBeVisible(locator) {
    cy.get(locator).should('not.be.visible');
  }

  /**
   * 
   * @param {*} locator 
   * returen a button element object
   */
  getButton(locator) {
    return cy.get(locator);
  }

}
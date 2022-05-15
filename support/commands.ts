import {userNameInputFieldLocator,passwordInputFieldLocator,submitButtonLocator} from "../integration/pageActions/loginPageActions"

Cypress.Commands.add('see', (siteUrl) => {

  cy.visit(siteUrl)
})

Cypress.Commands.add('login', (userName,password)=> {
  
  cy.get(userNameInputFieldLocator).type(userName)
  cy.get(passwordInputFieldLocator).type(password)
  cy.xpath(submitButtonLocator).click()
})

Cypress.Commands.add('obtain', (locator:string) => {

  cy.get(locator)
})

Cypress.Commands.add('path', (selector:string) => {

  cy.xpath(selector)
})

declare global {
  namespace Cypress {
    interface Chainable {
      login(firstValue: string,secondValue:string): Chainable<Element>
      see(url:string): Chainable<Element>
      obtain(locator:string):Chainable<Element>
      path(selector:string):Chainable<Element>
    }
  }
}
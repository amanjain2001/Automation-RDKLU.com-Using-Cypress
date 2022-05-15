/// <reference types="cypress"/>

export const userNameInputFieldLocator:string='[id="CustomerEmail"]';
export const passwordInputFieldLocator:string='[id="CustomerPassword"]';
export const submitButtonLocator:string='//input[@class="btn btn--full"]';
export const logOutButtonLocator:string='[id="customer_logout_link"]';
export const alertLoginMessageTextLocator:string='//div[@class="errors"]';

export default class LoginPage
{
    static enterCredentials(username:string,password:string):void
    {
        cy.login(username,password);
        cy.wait(7000);
    }

    static getCorrectLoginMessage():Cypress.Chainable
    {
        return cy.obtain(logOutButtonLocator);
    }

    static getIncorrectLoginMessage():Cypress.Chainable
    {
        return cy.path(alertLoginMessageTextLocator);
    }
}
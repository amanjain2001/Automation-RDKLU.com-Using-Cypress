/// <reference types="cypress"/>

export const topSectionLocator:string='//a[@class="site-nav__dropdown-link site-nav__dropdown-link--second-level site-nav__dropdown-link--has-children"]';
export const subSectionLocator:string='//a[@class="site-nav__dropdown-link"]';

export default class MensTeesPage
{
    static getTopSection():Cypress.Chainable
    {
        return cy.path(topSectionLocator)
    }
    static getSubSections():Cypress.Chainable
    {
        return cy.path(subSectionLocator)
    }
}
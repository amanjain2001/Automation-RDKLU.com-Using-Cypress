/// <reference types="cypress"/>

export const loginPageButtonLocator:string='//a[@class="site-nav__link site-nav__link--icon small--hide"]';
export const mainSectionLocator:string='(//a[@class="site-nav__link site-nav__link--has-dropdown"]/parent::li)';
export const nonSubSectionLocator:string='(//a[@class="site-nav__dropdown-link site-nav__dropdown-link--second-level"]//parent::li)';
export const searchButtonLocator:string='//a[@class="site-nav__link site-nav__link--icon js-modal-open-search-modal js-no-transition"]';
export const searchInputFieldLocator:string='[id="SearchModalInput"]';
export const confirmSearchButtonLocator:string='//button[@class="text-link search-modal__submit"]';

before(()=>
{
    cy.see('https://www.rdklu.com/')
})
    
export default class HomePage
{
    static navigateHomePage():void
    {
        cy.see('');
    }
    
    static navigateLoginPage():void
    {
        cy.path(loginPageButtonLocator).click();
    }

    static navigateWomensHoodiesPage():void
    {
        cy.path(nonSubSectionLocator).contains('Hoodies & Jackets').click({force:true});
    }

    static hoverMensSection():void
    {
        cy.path(mainSectionLocator).contains('Men').trigger('mouseover');
    }

    static searchProduct(product:string):void
    {
        cy.path(searchButtonLocator).click();
        cy.obtain(searchInputFieldLocator).click().type(product);
        cy.path(confirmSearchButtonLocator).click();
    }
}
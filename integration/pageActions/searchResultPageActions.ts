/// <reference types="cypress"/>

export const productSizeOptionLocator:string='select';
export const productsSearchResultLocator:string='//img[@class="grid-product__image lazyautosizes lazyloaded"]';
export const addToCartButtonLocator:string='//button[@class="btn btn--full add-to-cart"]';
export const productNamesTextLocator:string='//div[@class="grid-product__title"]';
export const previousPageButtonLocator:string='[title="Previous"]';
export const nextPageButtonLocator:string='[title="Next"]';
export const pageNumberLocator:string='(//span[@class="page"])';
export const filterLocator:string='select[id="SortBy"]';
export const navigatePreviousButtonLocatorIndex:number=0;

export default class SearchResultPage
{
    static addToCart():Cypress.Chainable
    {
        return cy.path(addToCartButtonLocator);
    }

    static selectProductSize(size:string):void
    {
        cy.scrollTo('bottom');
        cy.obtain(productSizeOptionLocator).first().select(size);
    }

    static getFilter():Cypress.Chainable
    {
        return cy.obtain(filterLocator);
    }
    
    static getProductsName():Cypress.Chainable
    {
        return cy.path(productNamesTextLocator);
    }

    static clickSearchedProduct():Cypress.Chainable
    {
        return cy.path(productsSearchResultLocator).click();
    }
    
    static navigatePreviousPageButton():Cypress.Chainable
    {
        return cy.obtain(previousPageButtonLocator).eq(navigatePreviousButtonLocatorIndex);
    }

    static navigateNextPageButton():Cypress.Chainable
    {
        return cy.obtain(nextPageButtonLocator).first();
    }

    static moveNextPage(page:number):void
    {
        cy.path(pageNumberLocator).eq(page).click();
    }

    static moveLastPage():void
    {
        cy.path(pageNumberLocator).last().click();
    }
}
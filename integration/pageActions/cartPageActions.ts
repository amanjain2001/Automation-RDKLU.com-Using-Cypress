/// <reference types="cypress"/>

export const cartProductsNameLocator:string='//a[@class="cart__product-name"]';
export const cartProductsSizeLocator:string='//div[@class="cart__variant-meta"]';
export const checkOutButtonLocator:string='//button[@class="btn btn--full cart__checkout cart__checkout--drawer"]';

export default class CartPage
{   
    static getProductNameInCart():Cypress.Chainable
    {
        return cy.path(cartProductsNameLocator);
    }

    static getProductSizeInCart():Cypress.Chainable
    {   
        return cy.path(cartProductsSizeLocator);
    }
    
    static productCheckOut():void
    {
        cy.path(checkOutButtonLocator).click({force: true});
    }
}
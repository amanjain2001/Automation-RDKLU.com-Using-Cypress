/// <reference types="cypress"/>

export const paymentButtonLocator:string='[id="continue_button"]';

export default class ShippingPage
{
    static clickPaymentButton():void
    {
        cy.obtain(paymentButtonLocator).click();
    }
}
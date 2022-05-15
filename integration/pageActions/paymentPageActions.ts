/// <reference types="cypress"/>

export const completePaymentButtonLocator:string='[id="continue_button"]';

export default class PaymentPage
{
    static clickOrderButton():void
    {
        cy.obtain(completePaymentButtonLocator).click({force:true});
    }
}
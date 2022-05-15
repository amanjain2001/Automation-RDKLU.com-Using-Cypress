/// <reference types="Cypress"/>

import * as url from "../../../cypress.json"
export const rdkluBrandNameTextLocator:string='//p[@class="h1 merhant-name-long one-line bold  svelte-ms3sas"]';
export const cardNumberInputFieldLocator:string='[id="CardNumber1"]';
export const cardHolderNameInputFieldLocator:string='[id="CardHolderName1"]';
export const dateAndMonthInputFieldLocator:string='[id="CardDate1"]';
export const CVVInputFieldLocator:string='[id="CVVFormatter1"]';
export const cancelPaymentButtonLocator:string='//button[@class="text-danger link"]';

export default class FinalPaymentPage
{
    static navigatePaymentPage():void
    {
        cy.see(url.env.paymentPageUrl);
    }

    static enterCardNumber(cardNumber:string):void
    {
        cy.obtain(cardNumberInputFieldLocator).type(cardNumber);
    }

    static enterCardHolderName(cardHolderName:string):void
    {
        cy.obtain(cardHolderNameInputFieldLocator).type(cardHolderName);
    }

    static enterDateAndMonth(dateAndMonth:string):void
    {
        cy.obtain(dateAndMonthInputFieldLocator).type(dateAndMonth);
    }

    static enterCVV(CVV:string):void
    {
        cy.obtain(CVVInputFieldLocator).type(CVV);
    }

    static cancelPayment():void
    {
        cy.path(cancelPaymentButtonLocator).click();
    }
    
    static navigateBackRdkluDoamin():void
    {
        cy.see(url.env.redirectCancelPaymentUrl);
    }
}
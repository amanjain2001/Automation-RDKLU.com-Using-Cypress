/// <reference types="cypress"/>

export const emailCheckBoxButtonLocator:string='[id="checkout_buyer_accepts_marketing"]';
export const emailInputFieldLocator:string='[id="checkout_email"]';
export const firstNameInputFieldLocator:string='[id="checkout_shipping_address_first_name"]';
export const lastNameInputFieldLocator:string='[id="checkout_shipping_address_last_name"]';
export const addressFieldLocator:string='[id="checkout_shipping_address_address1"]';
export const cityNameInputFieldLocator:string='[id="checkout_shipping_address_city"]';
export const selectStateNameLocator:string='//select[@placeholder="State"]';
export const pinCodeInputFieldLocator:string='[id="checkout_shipping_address_zip"]';
export const mobileNumberInputFieldLocator:string='[id="checkout_shipping_address_phone"]';
export const shippingButtonLocator:string='[id="continue_button"]';

export default class CheckOutPage
{
    static uncheckEmailCheckBoxButton():void
    {
        cy.obtain(emailCheckBoxButtonLocator).uncheck();
    }

    static enterEmail(email:string):void
    {
        cy.obtain(emailInputFieldLocator).click().type(email);
    }

    static enterFirstName(firstName:string):void
    {
        cy.obtain(firstNameInputFieldLocator).type(firstName);
    }

    static enterLastName(lastName:string):void
    {
        cy.obtain(lastNameInputFieldLocator).type(lastName);
    }

    static enterAddress(address:string):void
    {
        cy.obtain(addressFieldLocator).type(address);
    }

    static enterCity(city:string):void
    {
        cy.obtain(cityNameInputFieldLocator).type(city);
    }

    static selectState(state:string):void
    {
        cy.path(selectStateNameLocator).select(state);
    }

    static enterPincode(pincode:string):void
    {
        cy.obtain(pinCodeInputFieldLocator).type(pincode);
    }

    static enterMobileNumber(mobileNumber:string):void
    {
        cy.obtain(mobileNumberInputFieldLocator).type(mobileNumber);
    }

    static clickShippingButton():void
    {
        cy.obtain(shippingButtonLocator).click();
    }
}
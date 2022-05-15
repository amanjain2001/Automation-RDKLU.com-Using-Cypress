import CheckOutPage from '../../pageActions/userInformationPageActions'
import FinalPaymentPage from '../../pageActions/finalPayementPageActions'
import CartPage from '../../pageActions/cartPageActions'
import ShippingPage from '../../pageActions/shippingPageActions'
import HomePage from "../../pageActions/homePageActions"
import {rdkluBrandNameTextLocator} from "../../pageActions/finalPayementPageActions"

import * as searchProduct from "../../../fixtures/userInputs/searchItem.json"
import * as userDetails from "../../../fixtures/userInputs/userDetails.json"
import * as cardDetails from "../../../fixtures/userInputs/cardDetails.json"
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import SearchResultPage from '../../pageActions/searchResultPageActions'

Given("User successfully browsed to women's hoodies and jacket page",()=>{
    HomePage.navigateWomensHoodiesPage();
})

When('User search a item with ID RDKLU#32 and add the item in the cart and checkout from cart pane',()=>{
    HomePage.searchProduct(searchProduct.womensHoodie);
    SearchResultPage.getProductsName().first().click();
    SearchResultPage.selectProductSize(searchProduct.womensHoodieSelectedSize);
    SearchResultPage.addToCart().click();
    CartPage.productCheckOut();
})

And('User fill all the details of shipping address with opt out of Email me and offers and proceeds to payment page',()=>{
    CheckOutPage.uncheckEmailCheckBoxButton();
    CheckOutPage.enterEmail(userDetails.userEmail);
    CheckOutPage.enterFirstName(userDetails.userFirstName);
    CheckOutPage.enterLastName(userDetails.userLastName);
    CheckOutPage.enterAddress(userDetails.userAddress);
    CheckOutPage.enterCity(userDetails.userCity);
    CheckOutPage.selectState(userDetails.userState);
    CheckOutPage.enterPincode(userDetails.userPincode);
    CheckOutPage.enterMobileNumber(userDetails.userMobileNumber);
    CheckOutPage.clickShippingButton();
    ShippingPage.clickPaymentButton();
})

Given('User redirects to cashfree online payments page',()=>{
    FinalPaymentPage.navigatePaymentPage();
    cy.url()
        .should('contain','cashfree.com',"Should reach on cashfree payments domain");
})

Then('Payment page should contain brand RDKLU name',()=>{
    cy.path(rdkluBrandNameTextLocator)
        .should('contain','RDKLU',"Payment page should contain RDKLU on the payment page");
})

When('User fill all the details of card in card payment method and cancel the transaction',()=>{
    FinalPaymentPage.enterCardNumber(cardDetails.cardNumber);
    FinalPaymentPage.enterCardHolderName(cardDetails.cardHolderName);
    FinalPaymentPage.enterDateAndMonth(cardDetails.cardExpiryDateAndMonth);
    FinalPaymentPage.enterCVV(cardDetails.cardCVV);
    FinalPaymentPage.cancelPayment();
    cy.on('window:confirm', () => true);
})


Then('On cancelling order user should be redirected to RDKLU domain page',()=>{
    FinalPaymentPage.navigateBackRdkluDoamin();
    cy.url()
        .should('contain','rdklu.com',"Should reach on RDKLU domain");
})
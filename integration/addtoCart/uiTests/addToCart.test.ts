/// <reference types="cypress"/>
import HomePage from '../../pageActions/homePageActions'
import MensTeesPage from '../../pageActions/navigationBarPageActions'
import CartPage from '../../pageActions/cartPageActions'
import SearchResultPage from '../../pageActions/searchResultPageActions'
import * as searchProduct from "../../../fixtures/userInputs/searchItem.json"
import {Given,When,Then,And, Before} from 'cypress-cucumber-preprocessor/steps'

Before(()=>{
    HomePage.navigateHomePage()
})

Given('User successfully browsed to mens printed tees section',()=>{
    MensTeesPage.getTopSection().contains('Tees').click({force:true})     
})

When('User search for the item TEE#125',()=>{
    HomePage.searchProduct(searchProduct.mensTee);
})

And('User add the item in cart with random size',()=>{
    SearchResultPage.clickSearchedProduct();
    SearchResultPage.selectProductSize(searchProduct.mensTeeSelectedSize);
    SearchResultPage.addToCart().click();
})

Then('The cart should contain the same add product with same name and size',()=>{ 
    CartPage.getProductNameInCart()
        .should('contain',searchProduct.mensTee,"Exact t-shirt added in the cart");

    CartPage.getProductSizeInCart()
        .should('contain',searchProduct.mensTeeSelectedSize,"Exact size of t-shirt added in the cart");
})
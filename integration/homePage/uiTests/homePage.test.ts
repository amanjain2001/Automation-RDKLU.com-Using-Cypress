/// <reference types="cypress"/>
import {Given,Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../pageActions/homePageActions" 

Given('I successfully browse to the site',()=>{
    HomePage.navigateHomePage();
})

Then('It should land on the home page and should see products',()=>{
    cy.title()
        .should('include','RDKL-U || BK2BSKS',"Landed on home page");
})
/// <reference types="cypress"/>
import HomePage from '../../pageActions/homePageActions'
import LoginPage from '../../pageActions/loginPageActions'
import * as loginCredentials from "../../../fixtures/userInputs/loginCredentials.json"
import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

Given('User successfully browsed to login page',function(){
    HomePage.navigateLoginPage();
})


When('User fills valid credentials',()=>{
    LoginPage.enterCredentials(loginCredentials.registeredUserName,loginCredentials.registeredPassword);
})

Then('Validate user login with the credentials',function(){
    
    LoginPage.getCorrectLoginMessage()
    cy.should('contain','Log out',"After login log out should be visible");
    
})


When('User fills invalid credentials',()=>{
    LoginPage.enterCredentials(loginCredentials.registeredUserName,loginCredentials.unregisterdPassword);
})

Then('User should not be logged in and a message should be shown like incorrect email or password',function(){
    LoginPage.getIncorrectLoginMessage();
    cy.should('contain',"Incorrect email or password.","Incorrect credentials entered");
})
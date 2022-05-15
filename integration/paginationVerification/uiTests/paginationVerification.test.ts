import HomePage from '../../pageActions/homePageActions'
import MensTeesPage from '../../pageActions/navigationBarPageActions'
import SearchResultPage from '../../pageActions/searchResultPageActions'
import {Given,Then} from 'cypress-cucumber-preprocessor/steps'


Given("User successfully browsed to Men's tees section",()=>{
    HomePage.navigateHomePage();
    MensTeesPage.getTopSection().contains('Tees').click({force:true})  
})

Then("User shouldn't see more than 24 items",()=>{
    SearchResultPage.getProductsName()
        .should('not.have.length.greaterThan',24,"Page contains maximum 24 items");
})

Then("Navigating to other pages should also include the page number in the URL and dynamically previous and next button",()=>{

    SearchResultPage.navigatePreviousPageButton().should('not.be.visible');
    for(let page=0;page<=4;page++)
    {
        SearchResultPage.moveNextPage(page);
        cy.url().should('include',page+2);
        
        SearchResultPage.navigatePreviousPageButton()
            .should('be.visible',"Should be visible");

        SearchResultPage.navigateNextPageButton()
            .should('be.visible',"Should be visible");
    }
    
    SearchResultPage.moveLastPage();

    SearchResultPage.navigatePreviousPageButton() 
        .should('be.visible',"Previous button should be visible");

    SearchResultPage.navigateNextPageButton()
        .should('not.be.visible',"Next button should be visible");
})
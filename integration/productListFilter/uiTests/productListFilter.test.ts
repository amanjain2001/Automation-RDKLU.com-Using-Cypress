/// <reference types="cypress"/>
import HomePage from '../../pageActions/homePageActions'
import MensTeesPage from '../../pageActions/navigationBarPageActions'
import SearchResultPage from '../../pageActions/searchResultPageActions'
import {Given,Then,And} from 'cypress-cucumber-preprocessor/steps'

Given('User successfully browsed to printed tees section',()=>{
    HomePage.hoverMensSection();
    MensTeesPage.getTopSection().contains('Tees').click({force:true})  
})
    
Then('User should see filter option as Sort, Featured, Best selling, Alphabetically: A-Z, Alphabetically: Z-A, Price: low to high, Price: high to low, Date: old to new, Date: new to old',()=>{
    SearchResultPage.getFilter()
    .should('contain',"Sort","should contain Sort option in filters")
    .and('contain',"Featured","should contain featured option in filters")
    .and('contain',"Best selling","should contain best selling option in filters")
    .and('contain',"Alphabetically, A-Z","should contain Alphabetically, A-Z option in filters")
    .and('contain',"Alphabetically, Z-A","should contain Alphabetically, Z-A option in filters")
    .and('contain',"Price, low to high","should contain Price, low to high option in filters")
    .and('contain',"Price, high to low","should contain Price, high to low option in filters")
    .and('contain',"Date, old to new","should contain Date, old to new option in filters")
    .and('contain',"Date, new to old","should contain Date, new to old option in filters")
})

And('User apply Alphabetically, Z-A filter',()=>{
    SearchResultPage.getFilter().select('Alphabetically, Z-A');
})

Then('User should see the result in filtered alphabetically Z-A order',()=>{
    let shownItemspattern:Array<string>=[];
    let assertingItemsPattern:Array<string>=[];

    SearchResultPage.getProductsName().each(($li)=>{
        shownItemspattern.push(($li.text()));
    })
    SearchResultPage.getProductsName().each(($li)=>{
        assertingItemsPattern.push(($li.text()));
    })

    cy.wrap(assertingItemsPattern)
      .should('deep.equal', shownItemspattern.sort().reverse(),"on filtering the items should be sorted as per Alphabetically, Z-A");
})
/// <reference types="cypress"/>
import MensTeesPage from '../../pageActions/navigationBarPageActions'
import HomePage from '../../pageActions/homePageActions'
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

Given('User successfully browserd to site',()=>{
})

When('User hovers over mens section',()=>{
    HomePage.hoverMensSection();
})

And('User hovers to tees section',()=>{
    MensTeesPage.getTopSection().contains('Tees').trigger('mouseover',{force:true});
})

Then('User should be able to see described sub-menu',()=>{
    
    MensTeesPage.getSubSections().contains('Polo Tees')
        .should('contain',"Polo Tees","Should have polo tees sub section");

    MensTeesPage.getSubSections().contains('Athletico - Active Wear Tees')
        .should('contain',"Athletico - Active Wear Tees","Should have active wear tees sub section");

    MensTeesPage.getSubSections().contains('Basic Tees')
        .should('contain',"Basic Tees","Should have basic tees sub section");

    MensTeesPage.getSubSections().contains('Printed Tees')
        .should('contain',"Printed Tees","Should have printed tees sub section");

    MensTeesPage.getSubSections().contains('Pocket Tees')
        .should('contain',"Pocket Tees","Should have pocket tees sub section");

    MensTeesPage.getSubSections().contains('Raglan Tees')
        .should('contain',"Raglan Tees","Should have raglan tees sub section");

    MensTeesPage.getSubSections().contains('Oversize Tee')
        .should('contain',"Oversize Tee","Should have oversize tees sub section");

    MensTeesPage.getSubSections().contains('Printed Cotton Tees')
        .should('contain',"Printed Cotton Tees","Should have printed cotton tees sub section");

})
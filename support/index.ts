import './commands';
require('cypress-xpath');
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', () => {
  return false
})
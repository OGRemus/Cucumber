import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I have login data loaded', () =>{
    cy.login()
})

When('I visit the Portal', () =>{
    cy.visit('https://accesa-internship-portal.web.app/')
})

Then('I should see project dashboard', () =>{
    cy.get('h2').should('contain','Evaluations')
    cy.get('.nav-item.username').should('contain','Remus Gheorghita')
})
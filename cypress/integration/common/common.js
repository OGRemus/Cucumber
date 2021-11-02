import {defineStep} from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} miliseconds', time =>{
    cy.wait(time)
})

defineStep('I reload the browser', () => {
    cy.reload()
})

defineStep('I want to log into the portal', () => {
    cy.login()
    cy.visit('https://accesa-internship-portal.web.app/')
    cy.wait(1000)
})
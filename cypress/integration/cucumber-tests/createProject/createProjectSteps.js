import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

var numberOfProjects
When('I click on create new project button', () =>{
    cy.get('.project-card').its('length').then(length =>{
        numberOfProjects = length
    } ) 
    cy.get('.project-card.new-project').click()
    
})

And('I fill in the name and topics', () =>{
    cy.get('input[placeholder="Project Name"]').type('Cucumber test project')
    cy.get('li[class="p-chips-input-token"] input[type="text"]').type('test{enter}')
    cy.get('.p-button.create-test').click()
})

Then('The project is created', () => {
    cy.get('h2').should('contain','Cucumber test project')
    cy.get('button.p-button.p-button-danger').click()
    cy.get('.confirm-delete span.p-button-label').click()
    cy.get('.project-card').its('length').should('eq',numberOfProjects)
})

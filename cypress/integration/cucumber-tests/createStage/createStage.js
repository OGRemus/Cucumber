import { Given, When, And,Then } from "cypress-cucumber-preprocessor/steps";

var numberOfStages

When('I choose {string} project', project =>{
    project = "Cucumber"
    cy.get('div.project-card').contains(project).parent().find('.p-button-label').click()

})

And('I click the new stage button', () => {
    // cy.get('.stage').its('length').then(length =>{
    //     numberOfStages = length
    // })
    
    cy.get("span.p-button-label").contains('New Stage').click()
})

And('I fill in stage details', () => {
        cy.get('input[placeholder="New Stage..."]').type('Test stage')
        cy.get('input[placeholder="New Stage..."]').next().clear().type(100)
        cy.get('span.p-button-label').contains('Save').click()
})        

Then('The stage is created', () =>{
    // cy.get('.stage').its('length').should('eq',numberOfStages+1)
})

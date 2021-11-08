import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
var numberOfQuestions
When('I click on create new Project button', () => {
    cy.get('.project-card.new-project').click()
})

And('I fill in the name and topics', () => {
    cy.get('input[placeholder="Project Name"]').type('Cucumber test project')
    cy.get('li[class="p-chips-input-token"] input[type="text"]').type('test{enter}')
    cy.get('.p-button.create-test').click()
})

And('I click on the first stage', () => {
    cy.get('.stage').click()
    cy.get('.stage-editor-container').should('be.visible')
})

And('I fill in question information', () => {
    cy.get('.p-button.p-component.rnd-btn.primary-btn').contains('New Question').click()
    cy.get('.question-container').its('length').then(length => {
        numberOfQuestions = length
    })
    cy.get('.p-button.p-component.rnd-btn.primary-btn').contains('New Question').click()
    cy.wait(1000)
    cy.get('.question-container').should('be.visible')
    cy.get('textarea.p-inputtextarea.p-inputtext.p-component.p-filled.p-inputtextarea-resizable').parent().contains('Question').clear().type('This is a test question')
    cy.get('textarea.p-inputtextarea.p-inputtext.p-component.p-filled.p-inputtextarea-resizable').parent().contains('Answer template').clear().type('This is a test answer')
    cy.get('textarea.p-inputtextarea.p-inputtext.p-component.p-filled.p-inputtextarea-resizable').parent().contains('Solution').clear().type('This is a test solution')
    
})

And('I click on update question button', () => {
    cy.get('.p-button.p-component.rnd-btn.question-button').contains('Update Question').click()

})

Then('The question is created', () => {
 
    cy.get('.question-container').its('length').should('eq', numberOfQuestions + 1)
    cy.get('button.p-button.p-button-danger').click()
    cy.get('.confirm-delete span.p-button-label').click()
})
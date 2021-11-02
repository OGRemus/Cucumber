Feature: Feature name

    As a contributor user I want to add a new question

    Scenario: Adding a valid question
    Given I want to log into the portal
    When I click on create new Project button
    And I fill in the name and topics
    And I click on the first stage
    And I fill in question information
    And I click on update question button
    Then The question is created
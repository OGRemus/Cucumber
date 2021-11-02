Feature: Create a new porject

    As a contributor user i want to create a new project

    Scenario: Create a new project
    Given I want to log into the portal
    When I click on create new project button
    And I fill in the name and topics
    Then The project is created
    
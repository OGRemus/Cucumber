Feature: Creating a stage

    As a contributor I want to create a new stage

    Scenario: Create a valid stage
    Given I want to log into the portal
    When I choose "Cucumber" project
    And I click the new stage button
    And I fill in stage details
    Then The stage is created
Feature: Log-in

    As a valid user I want to log into the Portal

    Scenario: Valid login
    Given I have login data loaded
    When I visit the Portal
    Then I should see project dashboard
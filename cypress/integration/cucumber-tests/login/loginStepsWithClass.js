import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import Login from './Login'


Given('I have login data loaded', () =>{
    Login.loadCredentials()
})

When('I visit the Portal', () =>{
    Login.visitPortal()
})

Then('I should see project dashboard', () =>{
    Login.checkLogin()
})
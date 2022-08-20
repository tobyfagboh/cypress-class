import {login, homepage} from '../../fixtures/selectors.js';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Login Test", function () {
    before(function () {
        cy.visit('/')
        
    });

it("should not be able to login with invalid emaIL", function () {
    cy.get(login.emailInput).type(login.emailTxt)
    cy.get(login.passwordInput).type(login.passwordTxt)
    cy.get(login.loginBtn).click()
    cy.get(login.error).contains('Your username is invalid!')
    cy.get(login.error).should('have.text', 'Your username is invalid!')
})


// it("should not be able to login with invalid password", function () {
//     cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
//     cy.get('#username').type('test@yahoo.com')
//     cy.get('#password').type('12345678')
//     cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
// })

it("should be able to login with valid email and password", function () {
    cy.get(login.emailInput).type('student')
    cy.get(login.passwordInput).type('Password123')
    cy.get(login.loginBtn).click()

})

it("should be able to logout", function () {
    cy.get(homepage.logoutBtn).click()
})

})
import {login, homepage} from '../../fixtures/selectors.js';

export const validLogin = () => {
    cy.visit('/')
    cy.get(login.emailInput).type(login.emailTxt)
    cy.get(login.passwordInput).type(login.passwordTxt)
    cy.get(login.loginBtn).click()
}
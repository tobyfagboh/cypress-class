import {homepage} from '../../fixtures/selectors.js';

const access = require("./validLogin");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Practise page test", function () {
    before(function () {
        access.validLogin();
        
    });

it("should not be able to login with invalid emaIL", function () {
    cy.get(homepage.practiseMenuBtn).click()

})


})

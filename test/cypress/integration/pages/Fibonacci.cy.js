import { QBtn, } from 'quasar'; // <= cherry pick only the components you actually use
import FibonacciPage from '../../../../src/pages/Fibonacci.vue'; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component
describe('FibonacciPage tests', () => {
  it('Invalid input should result in errors', () => {
    cy.mount(FibonacciPage);
    cy.visit("fibonacci");
    cy.get("[data-test='inputFibonacci']").should("be.enabled");
    cy.get("[data-test='inputFibonacci']").focus().type("Hello");
    cy.get("[data-test='btnFibonacci']").click();
    cy.get("#fibResult").contains("1");
  });
  it('Valid input should succeed', () => {
    cy.mount(FibonacciPage, {
      global: { provide: qLayoutInjections() },
    });
    cy.visit("fibonacci");
    cy.get("[data-test='inputFibonacci']").should("be.enabled");
    cy.get("[data-test='inputFibonacci']").focus().type("20");
    cy.get("[data-test='btnFibonacci']").click();
    cy.get("#fibResult").contains("6765");
  });
});
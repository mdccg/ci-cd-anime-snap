/// <reference types="cypress" />

Cypress.Commands.add('pressTestDriveButton', () => {
  cy.get('[data-cy="test-drive-submit-button"]').click({ force: true });
});

Cypress.Commands.add('uploadImage', () => {
  cy.get('input[type="file"]').selectFile('cypress/fixtures/rengoku.jpeg', { force: true });
});
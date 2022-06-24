/*
 * Copyright 2022 Motorola Solutions, Inc.
 * All Rights Reserved.
 * Motorola Solutions Confidential Restricted
 */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getBySel', (selector, options) => {
  return cy.get(`[data-test="${selector}"]`, options);
});

Cypress.Commands.add('resetMockServer', () => {
  const url = `${Cypress.env('mockServerUrl')}/test/reset`;
  return cy.request('POST', url);
});

Cypress.Commands.add('dispatchAction', (action) => {
  Cypress.log({
    name: 'dispatchAction',
    displayName: 'dispatch',
    message: action.type,
  });

  return cy
    .window({log: false})
    .its('CCDM.store', {log: false})
    .invoke('dispatch', action);
});

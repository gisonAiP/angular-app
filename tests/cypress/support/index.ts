/*
 * Copyright 2022 Motorola Solutions, Inc.
 * All Rights Reserved.
 * Motorola Solutions Confidential Restricted
 */

/// <reference types="cypress" />
import './commands';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      dispatchAction(value: any): Chainable<Subject>;
      getBySel<K extends keyof HTMLElementTagNameMap>(
        selector: any,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
      resetMockServer<T = any>(): Chainable<Response<T>>;
    }
  }
}
beforeEach(() => {
  cy.window().then((win) => {
    // should be used to clean server !
    // cy.resetMockServer();
  });
});


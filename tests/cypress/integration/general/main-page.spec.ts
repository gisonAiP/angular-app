describe('General', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display header', () => {
    cy.get('[data-test="header"]').should('be.visible');
  });

  it('should display search button', () => {
    cy.get('[data-test="search-button"]').should('be.visible');
  });

  it('should display list of categories', () => {
    cy.get('[data-test="category"]').should('have.length', 12);
  });

  it('should display list of products', () => {
    cy.get('[data-test="product"]').should('have.length', 10);
  });
});

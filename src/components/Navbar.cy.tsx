import React from 'react';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  beforeEach(() => {
    cy.mount(<Navbar />);
  });

  it('renders the Navbar component', () => {
    cy.get('.navbar').should('exist');
  });

  it('renders the logo correctly', () => {
    cy.get('.flex-1').find('svg').should('exist');
  });

  it('renders the search input', () => {
    cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Search');
  });

  it('renders the "Create Post" button', () => {
    cy.contains('Create Post').should('exist');
  });

  it('renders the user avatar and dropdown', () => {
    cy.get('.avatar').should('exist');
    cy.get('.avatar').click(); // Open the dropdown
    cy.get('.dropdown-content').should('be.visible');
    cy.contains('Profile').should('exist');
    cy.contains('Settings').should('exist');
    cy.contains('Logout').should('exist');
  });

  it('checks dropdown items', () => {
    cy.get('.avatar').click(); // Open the dropdown
    cy.contains('Profile').click();

    cy.get('.avatar').click(); // Reopen the dropdown
    cy.contains('Settings').click();

    cy.get('.avatar').click(); // Reopen the dropdown
    cy.contains('Logout').click();
  });
});

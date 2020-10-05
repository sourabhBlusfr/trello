/// <reference types="cypress"/>

import { getTitle } from '../support/app.po';

describe('trello', () => {
  beforeEach(() => cy.visit('http://localhost:4200/board'));

  it('should have trello title', () => {
    getTitle().contains('TRELLO POC');
  });

  it('should check button avilablity', () => {
    cy.contains("Add Card");
    cy.contains("Details");
  });

  it('should add new card', () => {
    cy.contains('Add Card').click();
    cy.contains("Do you want to add a new card?");
    cy.get('input').type('Test Card');
    cy.get('button[matDialogClose="add"]').click();
  });

  it('should add new item', () => {
    cy.contains('Add Card').click();
    cy.contains("Do you want to add a new card?");
    cy.get('input').type('Test Card');
    cy.get('button[matDialogClose="add"]').click();
    cy.get('input[formControlName="cardItem"]').type('Test Item');
    cy.contains('Add Item').click();
    cy.contains("Test Item");
  });

  it('should navigate to details page and back again', () => {
    cy.contains('Add Card').click();
    cy.contains("Do you want to add a new card?");
    cy.get('input').type('Test Card');
    cy.get('button[matDialogClose="add"]').click();
    cy.get('input[formControlName="cardItem"]').type('Test Item');
    cy.contains('Add Item').click();
    cy.contains('Details').click();
    cy.contains("Test Card");
    cy.contains('Back').click();
    cy.contains("Test Item");
  });
});

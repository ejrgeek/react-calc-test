import React from 'react'
import Calculator from './Calculator'

describe('<Teste do Componente Calculator />', () => {
  
  beforeEach(() => {
    cy.mount(<Calculator/>);
  });

  it('Deve mostrar o valor inicial', () => {
    cy.get('[data-cy=display]').should('have.text', '0');
  });

  it('Deve adicionar digitos no display', () => {

    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=display').should('have.text', '2')
    //cy.get('[data-cy=email]').type('igor@gmail.com')
  });

  it('Deve realizar adição', () => {
    cy.get('[data-cy=btn]').contains("6").click()
    cy.get('[data-cy=btn]').contains("+").click()
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("=").click()
    cy.get('[data-cy=display]').should('have.text','11')
  });

  it('Deve realizar a subtração', () => {
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("–").click()
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("=").click()
    cy.get('[data-cy=display]').should('have.text','0')
  });

  it('Deve realizar mutiplicação', () => {
    cy.get('[data-cy=btn]').contains("7").click()
    cy.get('[data-cy=btn]').contains("×").click()
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("=").click()
    cy.get('[data-cy=display]').should('have.text','35')
  });

  it('Deve realizar divisão', () => {
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("÷").click()
    cy.get('[data-cy=btn]').contains("5").click()
    cy.get('[data-cy=btn]').contains("=").click()
    cy.get('[data-cy=display]').should('have.text','1')
  });

  it('Deve realizar divisão por 0', () => {
    cy.get('[data-cy=btn]').contains("7").click()
    cy.get('[data-cy=btn]').contains("÷").click()
    cy.get('[data-cy=btn]').contains("0").click()
    cy.get('[data-cy=btn]').contains("=").click()
    cy.get('[data-cy=display]').should('have.text','Infinity')
  });



})
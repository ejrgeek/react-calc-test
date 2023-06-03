import React from 'react'
import Calculator from './Calculator'

describe('Teste do Componente <Calculator/>', () => {
  
  beforeEach(() => {
    cy.mount(<Calculator />);
  });

  it('Deve mostrar o valor inicial', () => {
    cy.get('[data-cy=display]').should('have.text', '0');
  });

  it('Deve adicionar digitos no display', () => {
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('0').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('3').click()
    cy.get('[data-cy=display').should('have.text', '2023');
  });

  it('Deve realizar adição', () => {
    // 
  });

  it('Deve realizar a subtração', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('–').click()
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', '0')
  })

  








})
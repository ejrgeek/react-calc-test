import React from 'react'
import Calculator from './Calculator'

describe('Teste do componente calculator <Calculator />', () => {
  
  beforeEach(() => {
    cy.mount(<Calculator/>)
  });

  it('Deve mostrar o valor inicial', () => {
    cy.get('[data-cy=display]').should('have.text', '0');
  });

  it('Deve adcionar digitos no display', () => {
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=display]').should('have.text', '2')
  })

  it('Deve realizar adição', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('+').click()
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', '10')
  })

  it('Deve realizar a subtração', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('–').click()
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', '0')
  })

  it('Deve realizar a multiplicação', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('×').click()
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', '25')
  })

  it('Deve realizar a divisão', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('÷').click()
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', '1')
  })

  it('Deve realizar a divisão por 0', () => {
    cy.get('[data-cy=btn]').contains('5').click()
    cy.get('[data-cy=btn]').contains('÷').click()
    cy.get('[data-cy=btn]').contains('0').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text', 'Infinity')
  })

})
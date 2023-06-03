import React from 'react'
import Calculator from './Calculator'

describe('Teste do componente <Calculator/>', () => {
  beforeEach(() =>{
    cy.mount(<Calculator />);
  });

  it('Deve mostrar o valor inicial', () => {
    cy.get('[data-cy=display]').should('have.text', '0');
  });

  it('Deve adicionar digitos no display', () =>{
    cy.get('[data-cy=btn]').contains('2').click();
    cy.get('[data-cy=btn]').contains('0').click();
    cy.get('[data-cy=btn]').contains('2').click();
    cy.get('[data-cy=btn]').contains('3').click();
    cy.get('[data-cy=display]').should('have.text', '2023');
  });

  it('Deve realizar adição', () =>{
    cy.get('[data-cy=btn]').contains('5').click();
    cy.get('[data-cy=btn]').contains('+').click();
    cy.get('[data-cy=btn]').contains('1').click();
    cy.get('[data-cy=btn]').contains('=').click();
    cy.get('[data-cy=display]').should('have.text', '6');
  });

  it('Deve realizar subtração', () =>{

    cy.get('[data-cy=btn]').contains('5').click();
    cy.get('[data-cy=btn]').contains('–').click();
    cy.get('[data-cy=btn]').contains('5').click();
    cy.get('[data-cy=btn]').contains('=').click();
    cy.get('[data-cy=display]').should('have.text', '0');
  });

  it('Deve realizar multiplicação', () =>{

    cy.get('[data-cy=btn]').contains('3').click();
    cy.get('[data-cy=btn]').contains('×').click();
    cy.get('[data-cy=btn]').contains('4').click();
    cy.get('[data-cy=btn]').contains('=').click();
    cy.get('[data-cy=display]').should('have.text', '12');
  });

  it('Deve realizar divisão', () =>{

    cy.get('[data-cy=btn]').contains('9').click();
    cy.get('[data-cy=btn]').contains('9').click();
    cy.get('[data-cy=btn]').contains('÷').click();
    cy.get('[data-cy=btn]').contains('3').click();
    cy.get('[data-cy=btn]').contains('=').click();
    cy.get('[data-cy=display]').should('have.text', '33');
  });

  it('Deve realizar divisão por 0', () =>{

    cy.get('[data-cy=btn]').contains('6').click();
    cy.get('[data-cy=btn]').contains('÷').click();
    cy.get('[data-cy=btn]').contains('0').click();
    cy.get('[data-cy=btn]').contains('=').click();
    cy.get('[data-cy=display]').should('have.text', 'Infinity');
  });

})
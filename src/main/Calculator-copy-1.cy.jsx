import React from 'react'
import Calculator from './Calculator'

describe('<Calculator />', () => {
  beforeEach(()=>{
    cy.mount(<Calculator />);
  });

it('Deve mostrar o valor inicial', ()=>{
  cy.get('[data-cy=display]').should('have.text','0');
})

it('Deve realizar adição', ()=>{
  cy.get('[data-cy=btn]').contains('AC').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('+').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('=').click()
  cy.get('[data-cy=display]').should('have.text','10');
})

it('Deve realiza subtração', ()=>{
  cy.get('[data-cy=btn]').contains('AC').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('–').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('=').click()
  cy.get('[data-cy=display]').should('have.text','0');
})

it('Deve realiza multiplicação', ()=>{
  cy.get('[data-cy=btn]').contains('AC').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('×').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('=').click()
  cy.get('[data-cy=display]').should('have.text','25');
})

it('Deve realiza divisão', ()=>{
  cy.get('[data-cy=btn]').contains('AC').click()
  cy.get('[data-cy=btn]').contains('8').click()
  cy.get('[data-cy=btn]').contains('÷').click()
  cy.get('[data-cy=btn]').contains('4').click()
  cy.get('[data-cy=btn]').contains('=').click()
  cy.get('[data-cy=display]').should('have.text','2');
})

it('Deve verificar divisão por 0', ()=>{
  cy.get('[data-cy=btn]').contains('AC').click()
  cy.get('[data-cy=btn]').contains('5').click()
  cy.get('[data-cy=btn]').contains('÷').click()
  cy.get('[data-cy=btn]').contains('0').click()
  cy.get('[data-cy=btn]').contains('=').click()
  cy.get('[data-cy=display]').should('have.text','Infinity');
})

})
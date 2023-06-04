import React from 'react'
import Calculator from './Calculator'

describe('Teste do componente <Calculator />', () => {
  beforeEach(()=>{
    cy.mount(<Calculator />)
  })


  it('Deve mostar o valor inicial', ()=>{
    cy.get('[data-cy=display]').should('have.text', '0')
  })

  
  it('Deve adicionar algo ao campo', ()=>{
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=display]').should('have.text', '2')
  })


  it('Fazer a adicao', ()=>{
    cy.get('[data-cy=btn]').contains('AC').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('+').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text','4')
  })
  it('Fazer a subtracao', ()=>{
    cy.get('[data-cy=btn]').contains('AC').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('–').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text','0')
  })


  it('Fazer a multilicacao', ()=>{
    cy.get('[data-cy=btn]').contains('AC').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('×').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text','4')
  })


  it('Fazer a divisao', ()=>{
    cy.get('[data-cy=btn]').contains('AC').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('÷').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text','1')
  })


  it('Fazer a divisao por 0', ()=>{
    cy.get('[data-cy=btn]').contains('AC').click()
    cy.get('[data-cy=btn]').contains('2').click()
    cy.get('[data-cy=btn]').contains('÷').click()
    cy.get('[data-cy=btn]').contains('0').click()
    cy.get('[data-cy=btn]').contains('=').click()
    cy.get('[data-cy=display]').should('have.text','Infinity')
  })
})
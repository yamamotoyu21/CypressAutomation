/// <reference types="cypress" />

context("Window", () => { 
    beforeEach(() => {
        cy.visit('https://www.agoda.com/?cid=1844104')
    })

    it('open in mac 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()

    })

    it('open in iphone-6', () => {
        cy.viewport('iphone-6')
        cy.screenshot()

    })

  

})
/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
     
      cy.visit('https://www.agoda.com/?cid=1844104')
    })

    it('search1121', () => {
      cy.get('input[placeholder="目的地・宿泊施設を入力してください"]').type("東京都");
      cy.get('li[class="Suggestion_categoryName"]').contains('東京都').click();
      cy.get('div[aria-label="Sat Nov 20 2021"]').click();
      cy.get('div[aria-label="Sun Nov 21 2021"]').click();




      })

    
    
})
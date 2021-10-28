/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
     
      cy.visit('https://www.agoda.com/ja-jp/city/tokyo-jp.html?cid=1844104');
    })

    it('search1121', () => {

       
    
      cy.get('div[aria-label="Sat Nov 20 2021"]').click();
      cy.get('div[aria-label="Sun Nov 21 2021"]').click();
      cy.get('button[data-selenium="searchButton"]').click();

    

     cy.wait(1000);

      
      cy.get('a[data-element-name="search-sort-price"]').click();



      

     

      
     




      })

    
    
})
/// <reference types="cypress" />

describe('fileUploadTest', () => {

    const filePath = 'images/baby.jpg';

    beforeEach(() =>{
        cy.viewport('iphone-6');
        cy.visit('https://www.creative-hive.com/creativehive/uploader/uploader.cgi');
        
    })

    it('uploadFile', () =>{

        cy.get('input[name="upfile"]').attachFile(filePath)
        cy.get('input[name="comment"]').type('赤ちゃんの写真')
        cy.get('input[name="delkey"]').first().type('1000')
        cy.get('input[name="passwd"]').type('1000')
        cy.get('input[type="submit"]').first().click()
        cy.screenshot();
        cy.contains('リストに戻る').click()
        cy.screenshot();

    })

})
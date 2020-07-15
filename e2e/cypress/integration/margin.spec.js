describe("Parser", () => {  
  describe("To Do List", () => {
    it('should contain a shopping list', () => {
      cy.visit('/')
      cy.get('label[for=shopping]').click()
      cy.get('.input.light')
        .should('contain', "** Shopping **")
    })
  })
  describe("Note Taking", () => {
    it('should contain notes', () => { 
      cy.visit('/')
      cy.get('label[for=notes]').click()
      cy.get('.input.light')
        .should('contain', "'Typograpy That Works'")
      }
    })
  })
  describe("Reading App", () => {
    it('should contain a list of books', () => { 
      cy.visit('/')
      cy.get('label[for=reading]').click()
      cy.get('.input.light')
        .should('contain', "The Crying of Lot 49")
      }
    })
  })
});
});
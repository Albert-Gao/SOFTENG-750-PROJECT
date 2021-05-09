describe('WikiChat Home page before authentication', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render the nav bar!', () => {
        cy.get('nav').should('contain', 'Features').should('contain', 'About')
        cy.get('a[href="/login"]').should('contain', 'Log in')
    })

    it('should render the slogan!', () => {
        cy.get('h1').should('contain', 'A WikiPedia that social')
    })

    it('should render the Register button!', () => {
        cy.get('a[href="/register"]').should('contain', 'Join For Free')
    })

    it('should render the Footer!', () => {
        cy.get('footer')
            .should('contain', 'Features')
            .should('contain', 'About')
            .should('contain', 'FAQ')
            .should('contain', 'COMPSCI 732 Group 17 - Red Rhinoceros.')
    })
})

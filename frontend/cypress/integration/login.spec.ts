describe('Login', () => {
    it('should NOT log the user in when things are right', () => {
        cy.visit('https://softeng-750-project.vercel.app/login')
        cy.get('input[name=email]').type(`goodboy@goodboy.com`)
        cy.get('input[name=password]').type(`567`)
        cy.get('button[type=submit]').click()

        cy.url().should('equal', 'https://softeng-750-project.vercel.app/login')
    })

    it('should log the user in when things are right', () => {
        cy.visit('https://softeng-750-project.vercel.app/login')
        cy.get('input[name=email]').type(`goodboy@goodboy.com`)
        cy.get('input[name=password]').type(`123`)
        cy.get('button[type=submit]').click()

        cy.url().should('eq', 'https://softeng-750-project.vercel.app/')
    })
})

describe('Login', () => {
    it('should NOT log the user in when things are right', () => {
        cy.visit('/login')
        cy.get('input[name=email]').type(`goodboy@goodboy.com`)
        cy.get('input[name=password]').type(`567`)
        cy.get('button[type=submit]').click()

        cy.location().should((location) => {
            expect(location.pathname).equal('/login')
        })
    })

    it('should log the user in when things are right', () => {
        cy.visit('/login')
        cy.get('input[name=email]').type(`goodboy@goodboy.com`)
        cy.get('input[name=password]').type(`123`)
        cy.get('button[type=submit]').click()

        cy.location().should((location) => {
            expect(location.pathname).equal('/')
        })
    })
})

const getDateLinkFromId = (id: string) =>
    `li[data-testid=${id}] > article > div:nth-child(1) > div > div.flex-1.min-w-0 > p.text-sm.text-gray-500 > a`

// Bertrand Russell
const postId = '607b9e3a9ad1fe003d180da6'

describe('interactions from the detail page', () => {
    beforeEach(() => {
        // @ts-ignore
        cy.login()
        cy.get(getDateLinkFromId(postId)).click()
    })

    it('should render the correct news', () => {
        cy.get('h2').should('contain.text', 'Bertrand Russell')

        const creatorSelector =
            '#root > div > div.flex.h-screen.overflow-hidden.bg-white > div > main > div > div > aside > div.py-6.mt-6.space-y-8.border-t.border-gray-200 > div > ul > li > a > div.text-sm.font-medium.text-gray-900'

        cy.get(creatorSelector).should('contain.html', 'goodboy')

        const timeSelector =
            '#root > div > div.flex.h-screen.overflow-hidden.bg-white > div > main > div > div > aside > div.space-y-5 > div:nth-child(3) > span'

        cy.get(timeSelector).should('contain.text', 'Created on 04/18/2021')

        const authorWordsSelector =
            '#root > div > div.flex.h-screen.overflow-hidden.bg-white > div > main > div > div > div > div.mt-5 > div > span'

        cy.get(authorWordsSelector).should(
            'contain.text',
            'This man is great, right?',
        )
    })

    it('should be able to add to fav list', () => {
        const favButtonSelector =
            '#root > div > div.flex.h-screen.overflow-hidden.bg-white > div > main > div > div > div > div.md\\:flex.md\\:items-center.md\\:justify-between.md\\:space-x-4.xl\\:border-b.xl\\:pb-6 > div > button'

        cy.get(favButtonSelector).should('contain.text', 'Favourite')

        cy.get(favButtonSelector).click()

        cy.get(favButtonSelector).should('contain.text', 'Remove')

        cy.get(favButtonSelector).click()
    })

    it('should be able to take the user to the wikipedia', () => {
        const wikiButtonSelector =
            '#root > div > div.flex.h-screen.overflow-hidden.bg-white > div > main > div > div > div > div.md\\:flex.md\\:items-center.md\\:justify-between.md\\:space-x-4.xl\\:border-b.xl\\:pb-6 > div > a'

        cy.get(wikiButtonSelector).invoke('removeAttr', 'target').click()

        cy.url().should(
            'equal',
            'https://en.wikipedia.org/wiki/Bertrand_Russell',
        )
    })
})

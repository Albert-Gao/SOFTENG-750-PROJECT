import { list } from 'cypress/lib/tasks/cache'

const getLikeButtonFromId = (id: string) =>
    `li[data-testid=${id}] > article > div.flex.justify-between.mt-6.space-x-8 > div.flex.space-x-6 > span:nth-child(1) > button`

const getLikeIconFromId = (id: string) =>
    `li[data-testid=${id}] > article > div.flex.justify-between.mt-6.space-x-8 > div.flex.space-x-6 > span:nth-child(1) > button > svg`

const getShareIconFromId = (id: string) =>
    `li[data-testid=${id}] > article > div.flex.justify-between.mt-6.space-x-8 > div.relative.flex.text-sm > span > button`

const getShareMenuFromId = (id: string) =>
    `li[data-testid=${id}] > article > div.flex.justify-between.mt-6.space-x-8 > div.relative.flex.text-sm > div`

const getOptionMenuButtonFromId = (id: string) =>
    `li[data-testid=${id}] > article > div:nth-child(1) > div > div.flex.self-center.flex-shrink-0 > div > button`

const getOptionMenuFromId = (id: string) =>
    `li[data-testid=${id}] div[role=menu]`

const getAddFavButtonFromId = (id: string) =>
    `li[data-testid=${id}] > article > div:nth-child(1) > div > div.flex.self-center.flex-shrink-0 > div > div > div > button`

describe('interactions from the home page', () => {
    beforeEach(() => {
        // @ts-ignore
        cy.login()
    })

    it("should like the user's news", () => {
        // the post about Cognitive science
        const postId = '607b9e459ad1fe003d180da7'

        // check the like icon is purple
        cy.get(getLikeIconFromId(postId))
            .invoke('attr', 'fill')
            .should('equal', 'rgba(79, 70, 229, var(--tw-bg-opacity))')

        // click the like button
        cy.get(getLikeButtonFromId(postId)).click()

        // check the like has been undone
        cy.get(getLikeIconFromId(postId))
            .invoke('attr', 'fill')
            .should('equal', 'currentColor')

        // click the like button to restore it
        cy.get(getLikeButtonFromId(postId)).click()
    })

    it('should open the share menu', () => {
        // the post about Cognitive science
        const postId = '607b9e459ad1fe003d180da7'

        cy.get(getShareMenuFromId(postId)).should('not.exist')

        cy.get(getShareIconFromId(postId)).click()

        cy.get(getShareMenuFromId(postId)).should('exist')

        cy.get(getShareIconFromId(postId)).click()

        cy.get(getShareMenuFromId(postId)).should('not.exist')
    })

    it('should be able to open the option menu', () => {
        // the post about Cognitive science
        const postId = '607b9e459ad1fe003d180da7'

        cy.get(getOptionMenuFromId(postId)).should('not.exist')

        cy.get(getOptionMenuButtonFromId(postId)).click()

        cy.get(getOptionMenuFromId(postId)).should('exist')

        cy.get(getOptionMenuButtonFromId(postId)).click()

        cy.get(getOptionMenuFromId(postId)).should('not.exist')
    })

    it('should be able to add news to the fav list', () => {
        // the post about Cognitive science
        const postId = '607b9e459ad1fe003d180da7'

        cy.get(getOptionMenuButtonFromId(postId)).click()

        cy.get(getAddFavButtonFromId(postId)).should(
            'contain.text',
            'Add to favorites',
        )

        cy.get(getAddFavButtonFromId(postId)).click()

        cy.get(getAddFavButtonFromId(postId)).should(
            'contain.text',
            'Remove from favorites',
        )

        cy.get(getAddFavButtonFromId(postId)).click()
    })
})

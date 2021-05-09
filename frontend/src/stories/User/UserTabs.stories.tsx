import { UserTabs } from '../../pages/User/components/UserTabs'
import { getStoryTemplate, Meta } from '../utils'

export default {
    title: 'Pages/User/UserTabs',
    component: UserTabs,
    argTypes: {
        setCurrentTab: { action: 'setCurrentTab' },
    },
    parameters: {
        docs: {
            page: null,
        },
    },
} as Meta<typeof UserTabs>

const Template = getStoryTemplate(UserTabs)

export const Standard = Template.bind({})
Standard.args = {
    currentTab: 'fav',
    id: '6077a0e4c36ee06aa53db3a9',
    // @ts-expect-error
    user: {
        _id: '6077a0e4c36ee06aa53db3a9',
        privacy: {
            shouldShowEmail: false,
            shouldShowFavouritePage: true,
            shouldShowSubmittedNews: true,
        },
        favourites: [],
        email: 'camus@camus.com',
        nickName: 'Camus',
        avatar: 'A31boy',
        createdAt: '2021-04-15T02:11:48.285Z',
        updatedAt: '2021-04-15T02:20:22.314Z',
    },
}

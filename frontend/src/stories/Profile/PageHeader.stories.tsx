import { SubmitButton } from '../../components/AppShell/components/PageHeader'
import { getStoryTemplate, Meta } from '../utils'

const ProfileWidget: React.FC = () => {
    return (
        <div className={`pb-32 bg-indigo-600`}>
            <header className="py-10">
                <div className="flex justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white">Profile</h1>

                    <SubmitButton />
                </div>
            </header>
        </div>
    )
}

export default {
    title: 'Pages/Profile/ProfileHeader',
    component: ProfileWidget,
} as Meta

const Template = getStoryTemplate(ProfileWidget)

export const Standard = Template.bind({})
Standard.args = {}

import { useAtom } from 'jotai'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useToasts } from 'react-toast-notifications'
import { changeUserInfoApi } from '../../api/users.api'
import { ProfileSectionSubmitButton } from '../../components/ProfileSectionSubmitButton'
import { userAtom } from '../../state'
import { Auth } from '../../utils/Auth'
import { PrivacySettingItem } from './components/PrivacySettingItem'

const ProfilePrivacy: React.FC = () => {
    const [
        {
            privacy: {
                shouldShowEmail,
                shouldShowFavouritePage,
                shouldShowSubmittedNews,
            } = {
                shouldShowEmail: true,
                shouldShowFavouritePage: true,
                shouldShowSubmittedNews: true,
            },
        },
    ] = useAtom(userAtom)

    const { register, watch, setValue, handleSubmit } = useForm({
        defaultValues: {
            shouldShowEmail,
            shouldShowFavouritePage,
            shouldShowSubmittedNews,
        },
    })
    const { addToast } = useToasts()
    const mutation = useMutation(changeUserInfoApi.query)

    const shouldShowEmailWatched = watch('shouldShowEmail')
    const shouldShowFavouritePageWatched = watch('shouldShowFavouritePage')
    const shouldShowSubmittedNewsWatched = watch('shouldShowSubmittedNews')

    return (
        <form
            className="divide-y divide-gray-200 lg:col-span-9"
            onSubmit={handleSubmit(async (privacy) => {
                try {
                    const response = await mutation.mutateAsync({ privacy })
                    Auth.saveUserInfo(response)
                } catch (e) {
                    addToast('Something wrong happened, please try again later')
                }
            })}
        >
            {/* <!-- Privacy section --> */}
            <div className="pt-6 divide-y divide-gray-200">
                <div className="px-4 sm:px-6">
                    <div>
                        <h2 className="text-lg font-medium leading-6 text-gray-900">
                            Privacy
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Manage you private settings of your public profile.
                        </p>
                    </div>
                    <ul className="mt-2 divide-y divide-gray-200">
                        <PrivacySettingItem
                            register={register}
                            name="shouldShowEmail"
                            title="Display email"
                            description="Show your email address on your public profile page."
                            isEnabled={shouldShowEmailWatched}
                            onClick={() => {
                                setValue(
                                    'shouldShowEmail',
                                    !shouldShowEmailWatched,
                                )
                            }}
                        />

                        <PrivacySettingItem
                            register={register}
                            name="shouldShowFavouritePage"
                            title="Display Favourites"
                            description="Show your favourite list on your public profile page."
                            isEnabled={shouldShowFavouritePageWatched}
                            onClick={() => {
                                setValue(
                                    'shouldShowFavouritePage',
                                    !shouldShowFavouritePageWatched,
                                )
                            }}
                        />

                        <PrivacySettingItem
                            register={register}
                            name="shouldShowSubmittedNews"
                            title="Display Submitted News"
                            description="Show your submitted news on your public profile page."
                            isEnabled={shouldShowSubmittedNewsWatched}
                            onClick={() => {
                                setValue(
                                    'shouldShowSubmittedNews',
                                    !shouldShowSubmittedNewsWatched,
                                )
                            }}
                        />
                    </ul>
                </div>
                <ProfileSectionSubmitButton
                    disabled={
                        shouldShowEmailWatched === shouldShowEmail &&
                        shouldShowFavouritePage ===
                            shouldShowFavouritePageWatched &&
                        shouldShowSubmittedNews ===
                            shouldShowSubmittedNewsWatched
                    }
                />
            </div>
        </form>
    )
}

export default ProfilePrivacy

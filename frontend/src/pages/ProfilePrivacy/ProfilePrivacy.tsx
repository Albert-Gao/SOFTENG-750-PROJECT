import React, { useState } from 'react'
import { ProfileSectionSubmitButton } from '../../components/ProfileSectionSubmitButton'
import { PrivacySettingItem } from './components/PrivacySettingItem'

const ProfilePrivacy: React.FC = () => {
    const [shouldDisplayEmail, setShouldDisplayEmail] = useState(false)
    const [shouldDisplayFavourites, setShouldDisplayFavourites] = useState(
        false,
    )
    const [
        shouldDisplaySubmittedNews,
        setShouldDisplaySubmittedNews,
    ] = useState(false)

    return (
        <form
            className="divide-y divide-gray-200 lg:col-span-9"
            action="#"
            method="POST"
        >
            {/* <!-- Privacy section --> */}
            <div className="pt-6 divide-y divide-gray-200">
                <div className="px-4 sm:px-6">
                    <div>
                        <h2 className="text-lg font-medium leading-6 text-gray-900">
                            Privacy
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            These settings will affect your public profile page.
                        </p>
                    </div>
                    <ul className="mt-2 divide-y divide-gray-200">
                        <PrivacySettingItem
                            title="Display email"
                            description="Enabling this will display your email address on your public profile page."
                            isEnabled={shouldDisplayEmail}
                            onClick={() => setShouldDisplayEmail((v) => !v)}
                        />

                        <PrivacySettingItem
                            title="Display Favourites"
                            description="Enabling this will display your favourite list on your public profile page."
                            isEnabled={shouldDisplayFavourites}
                            onClick={() =>
                                setShouldDisplayFavourites((v) => !v)
                            }
                        />

                        <PrivacySettingItem
                            title="Display Submitted News"
                            description="Enabling this will display your favourite list on your public profile page."
                            isEnabled={shouldDisplaySubmittedNews}
                            onClick={() =>
                                setShouldDisplaySubmittedNews((v) => !v)
                            }
                        />
                    </ul>
                </div>
                <ProfileSectionSubmitButton />
            </div>
        </form>
    )
}

export default ProfilePrivacy

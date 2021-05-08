import React from 'react'
import { CallToAction } from './components/CallToAction'
import { FeatureHeader } from './components/FeatureHeader'
import { FeatureSlot } from './components/FeatureSlot'

const Features: React.FC = () => (
    <div className="relative py-16 bg-white rounded-lg sm:py-24 lg:py-32">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <FeatureHeader />
            <div className="mt-12 mb-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureSlot
                        iconType="deploy"
                        title="Upload Wiki Topics"
                        description="You can submit interesting topics and
                            initiate discussions."
                    />

                    <FeatureSlot
                        iconType="lock"
                        title="Authenticated Account"
                        description="You need to register and verify to
                            browse and discuss."
                    />

                    <FeatureSlot
                        iconType="refresh"
                        title="Quick Update"
                        description="WikiChat provides you with the latest
                            and hottest news."
                    />

                    <FeatureSlot
                        iconType="shield"
                        title="Safe Browsing"
                        description="You can choose not to show your favourites or liked news."
                    />

                    <FeatureSlot
                        iconType="cogwheel"
                        title="Customized Setting"
                        description="You can edit personal profile and
                            preference."
                    />

                    <FeatureSlot
                        iconType="shelf"
                        title="Interactive Web"
                        description="Chat with each other via likes and comments, fall in love with the online chatting again."
                    />
                </div>
            </div>
            <CallToAction />
        </div>
    </div>
)

export default Features

import React from 'react'
import { FeatureHeader } from './components/FeatureHeader'
import { FeatureSlot } from './components/FeatureSlot'

const Features: React.FC = () => (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <FeatureHeader />
            <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureSlot
                        iconType="deploy"
                        title="Push to Deploy"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />

                    <FeatureSlot
                        iconType="lock"
                        title="SSL Certificates"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />

                    <FeatureSlot
                        iconType="refresh"
                        title="Simple Queues"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />

                    <FeatureSlot
                        iconType="shield"
                        title="Advanced Security"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />

                    <FeatureSlot
                        iconType="cogwheel"
                        title=" Powerful API"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />

                    <FeatureSlot
                        iconType="shelf"
                        title="Database Backups"
                        description="Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi
                            lobortis."
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Features

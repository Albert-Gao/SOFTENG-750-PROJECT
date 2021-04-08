import React from 'react'
import { FeatureIcon } from './FeatureIcon'

export const FeatureSlot: React.FC<{
    title: string
    description: string
    iconType: React.ComponentProps<typeof FeatureIcon>['type']
}> = ({ title, description, iconType }) => (
    <div className="pt-6">
        <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
            <div className="-mt-6">
                <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        {/* <!-- Heroicon name: outline/cloud-upload --> */}
                        <FeatureIcon type={iconType} />
                    </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {title}
                </h3>
                <p className="mt-5 text-base text-gray-500">{description}</p>
            </div>
        </div>
    </div>
)

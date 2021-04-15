import { DateTime } from '../../../utils/DateTime'
import { TabBox } from './TabBox'

export const ProfileTab: React.FC<{
    shouldShowEmail: boolean
    email: string
    createdAt: string
    updatedAt: string
}> = ({ shouldShowEmail, email, createdAt, updatedAt }) => {
    return (
        <TabBox>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {shouldShowEmail
                            ? email
                            : 'This user hides his/her email.'}
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Join at
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {DateTime.utc2LocalRelative(createdAt)}
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Profile update at
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        {DateTime.utc2LocalRelative(updatedAt)}
                    </dd>
                </div>
            </dl>
        </TabBox>
    )
}

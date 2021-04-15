import { TabBox } from './TabBox'

export const ProfileTab: React.FC = () => {
    return (
        <TabBox>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        (555) 123-4567
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        ricardocooper@example.com
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Title</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        Senior Front-End Developer
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Team</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        Product Development
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        San Francisco
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Sits</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        Oasis, 4th floor
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Salary
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">$145,000</dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Birthday
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">June 8, 1990</dd>
                </div>

                <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
                        <p>
                            Tincidunt quam neque in cursus viverra orci, dapibus
                            nec tristique. Nullam ut sit dolor consectetur urna,
                            dui cras nec sed. Cursus risus congue arcu aenean
                            posuere aliquam.
                        </p>
                        <p>
                            Et vivamus lorem pulvinar nascetur non. Pulvinar a
                            sed platea rhoncus ac mauris amet. Urna, sem pretium
                            sit pretium urna, senectus vitae. Scelerisque
                            fermentum, cursus felis dui suspendisse velit
                            pharetra. Augue et duis cursus maecenas eget quam
                            lectus. Accumsan vitae nascetur pharetra rhoncus
                            praesent dictum risus suspendisse.
                        </p>
                    </dd>
                </div>
            </dl>
        </TabBox>
    )
}

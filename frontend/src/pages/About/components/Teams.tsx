import { TeamMember } from './TeamMember'

export const Teams: React.FC = () => (
    <div className="bg-white rounded-lg">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Meet our leadership
                </h2>

                <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                    <li>
                        <TeamMember
                            portraitSrc="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            name="Emma Dorsey"
                            title="Senior Front-end Developer"
                            description="Ultricies massa malesuada viverra cras
                                lobortis. Tempor orci hac ligula dapibus
                                mauris sit ut eu. Eget turpis urna
                                maecenas cras. Nisl dictum."
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            name="Emma Dorsey"
                            title="Senior Front-end Developer"
                            description="Ultricies massa malesuada viverra cras
                                lobortis. Tempor orci hac ligula dapibus
                                mauris sit ut eu. Eget turpis urna
                                maecenas cras. Nisl dictum."
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            name="Emma Dorsey"
                            title="Senior Front-end Developer"
                            description="Ultricies massa malesuada viverra cras
                                lobortis. Tempor orci hac ligula dapibus
                                mauris sit ut eu. Eget turpis urna
                                maecenas cras. Nisl dictum."
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            name="Emma Dorsey"
                            title="Senior Front-end Developer"
                            description="Ultricies massa malesuada viverra cras
                                lobortis. Tempor orci hac ligula dapibus
                                mauris sit ut eu. Eget turpis urna
                                maecenas cras. Nisl dictum."
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

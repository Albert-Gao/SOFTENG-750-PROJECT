import { DotsBackground } from './DotsBackground'
import { TestimonialCard } from './TestimonialCard'

export const Introduction: React.FC = () => (
    <div className="relative pt-6 pb-16 bg-white rounded-lg sm:pb-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
                <div
                    aria-hidden="true"
                    className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                    <DotsBackground />
                </div>
                <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    <TestimonialCard />
                </div>
            </div>

            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                {/* <!-- Content area --> */}
                <div className="pt-12 sm:pt-16 lg:pt-20">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        SOFTENG 750/ COMPSCI 732 WikiChat Project Overview
                    </h2>
                    <div className="mt-6 space-y-6 text-gray-500">
                        <p className="text-lg">
                            Wikipedia is one of the most popular online
                            resources, so on average, people spend quite a bit
                            of time on Wikipedia; yet there is surprisingly
                            little social interaction possibility. The talk
                            pages on Wikipedia are predominantly for editorial
                            discussions and not for general discussion on a
                            topic and also have some drawbacks, being basically
                            just a wikipage. This project is about building a
                            social media web app around Wikipedia that may offer
                            functions such as forum, recommender, commenting and
                            Q&A functions. Various ways of linking to Wikipedia
                            content/importing content are possible, ideal would
                            be a system where one can annotate questions and
                            comments directly to specific points in the text.
                        </p>
                        <p className="text-base leading-7">
                            Our intention and motivation to develop this forum
                            is that users can not find a place within Wikipedia
                            to discuss and express their opinions on specific
                            topics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

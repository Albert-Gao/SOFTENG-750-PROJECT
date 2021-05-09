import React from 'react'
import { LightCallToAction } from './components/LightCallToAction'
import { Question } from './components/Question'

const FAQ: React.FC = () => {
    return (
        <div className="rounded-lg bg-gray-50">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        <Question
                            question="Can I post any topics from Wikipedia?"
                            answer="Yes! The &#039;submit news&#039; function allows users to insert wiki url and add more information."
                        />
                        <Question
                            question="How can I submit news?"
                            answer="Just by clicking &#039;submit news&#039; button in Home Page! Then typing anything you are interested in~."
                        />
                        <Question
                            question="How can I chage my personal information?"
                            answer="Just click profile on the top left corner, you can change your nickname."
                        />
                        <Question
                            question="Can I save the topics that I am interested in?"
                            answer="Absolutely! You can click favourite button of the topic and check it out in &#039;Favourites&#039;."
                        />
                        <Question
                            question="What can I do if I want to join the discussion?"
                            answer="Just simply make comments below the topic that you are interested in!!."
                        />
                    </dl>
                </div>
            </div>
            <div className="p-6">
                <LightCallToAction />
            </div>
        </div>
    )
}

export default FAQ

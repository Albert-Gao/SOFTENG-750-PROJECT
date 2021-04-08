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
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                        />
                        <Question
                            question="What&#039;s the best thing about Switzerland?"
                            answer="I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
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

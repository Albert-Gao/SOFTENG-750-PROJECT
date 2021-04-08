import { useState } from 'react'
import { ExpandButton } from './ExpandButton'

export const Question: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
}) => {
    const [isQuestionOpen, setIsQuestionOpen] = useState(false)

    return (
        <div className="pt-6">
            <dt className="text-lg">
                <ExpandButton
                    isQuestionOpen={isQuestionOpen}
                    setIsQuestionOpen={setIsQuestionOpen}
                >
                    <span className="font-medium text-gray-900">
                        {question}
                    </span>
                </ExpandButton>
            </dt>
            {isQuestionOpen && (
                <dd className="pr-12 mt-2" id="faq-0">
                    <p className="text-base text-gray-500">{answer}</p>
                </dd>
            )}
        </div>
    )
}

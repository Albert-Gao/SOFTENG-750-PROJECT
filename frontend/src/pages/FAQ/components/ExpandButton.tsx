import { Dispatch, SetStateAction } from 'react'

export const ExpandButton: React.FC<{
    isQuestionOpen: boolean
    setIsQuestionOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isQuestionOpen, setIsQuestionOpen, children }) => (
    <button
        type="button"
        className="flex items-start justify-between w-full text-left text-gray-400"
        aria-controls="faq-0"
        aria-expanded="false"
        onClick={() => {
            setIsQuestionOpen((v) => !v)
        }}
    >
        {children}
        <span className="flex items-center ml-6 h-7">
            {/* <!--
                Expand/collapse icon, toggle classes based on question open state.

                Heroicon name: outline/chevron-down

                Open: "-rotate-180", Closed: "rotate-0"
                --> */}
            <svg
                className={`w-6 h-6 transform ${
                    isQuestionOpen ? '-rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </span>
    </button>
)

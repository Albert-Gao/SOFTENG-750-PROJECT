import { useHistory } from 'react-router-dom'
import { PATHS } from '../../../../../routes/routes.constants'

const ICON_MAP = {
    like: (
        <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
    ),
    reply: (
        <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
            />
        </svg>
    ),
} as const

export const ActionButton: React.FC<{
    id: string
    quantity: number
    ariaLabel: string
    icon: keyof typeof ICON_MAP
}> = ({ quantity, ariaLabel, icon, id }) => {
    const history = useHistory()
    const onClick =
        icon === 'like' ? () => {} : () => history.push(PATHS.DETAIL_RAW + id)

    return (
        <span className="inline-flex items-center text-sm">
            <button
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                onClick={onClick}
            >
                {ICON_MAP[icon]}
                <span className="font-medium text-gray-900">{quantity}</span>
                <span className="sr-only">{ariaLabel}</span>
            </button>
        </span>
    )
}

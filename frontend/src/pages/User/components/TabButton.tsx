export const TabButton: React.FC<{
    isCurrent: boolean
    onClick: () => void
}> = ({ isCurrent, onClick, children }) => {
    const ariaCurrent = isCurrent ? { 'aria-current': 'page' } : {}

    return (
        // @ts-ignore
        <button
            onClick={onClick}
            className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                isCurrent
                    ? 'border-pink-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            {...ariaCurrent}
        >
            {children}
        </button>
    )
}

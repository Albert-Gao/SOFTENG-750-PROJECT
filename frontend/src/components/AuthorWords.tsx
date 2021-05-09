const Icon: React.FC = () => (
    <svg
        className="absolute w-8 h-8 text-indigo-700 opacity-50 top-1 left-1"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 144 144"
        aria-hidden="true"
    >
        <path
            strokeWidth="2"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
        />
    </svg>
)

export const AuthorWords: React.FC<{ authorWords?: string }> = ({
    authorWords,
}) =>
    authorWords ? (
        <div className="relative py-3 pl-12 pr-4 mt-3 bg-gray-200 rounded-md sm:flex sm:items-start sm:justify-between">
            <Icon />
            <span className="text-sm italic font-medium text-gray-500">
                {authorWords}
            </span>
        </div>
    ) : null

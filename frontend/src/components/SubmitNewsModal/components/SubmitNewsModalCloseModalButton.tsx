export const SubmitNewsModalCloseModalButton: React.FC<{
    closeModal: () => void
}> = ({ closeModal }) => (
    <button
        type="button"
        className="text-indigo-200 bg-indigo-700 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={closeModal}
    >
        <span className="sr-only">Close panel</span>
        {/* <!-- Heroicon name: outline/x --> */}
        <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>
)

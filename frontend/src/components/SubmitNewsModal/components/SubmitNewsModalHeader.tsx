import { SubmitNewsModalCloseModalButton } from './SubmitNewsModalCloseModalButton'

export const SubmitNewsModalHeader: React.FC<{ closeModal: () => void }> = ({
    closeModal,
}) => (
    <div className="px-4 py-6 bg-indigo-700 sm:px-6">
        <div className="flex items-center justify-between">
            <h2
                className="text-lg font-medium text-white"
                id="slide-over-title"
            >
                Submit Wikipedia Link
            </h2>
            <div className="flex items-center ml-3 h-7">
                <SubmitNewsModalCloseModalButton closeModal={closeModal} />
            </div>
        </div>
        <div className="mt-1">
            <p className="text-sm text-indigo-300">
                Share the link of your favourite Wikipedia page with your
                opinions here with other fans!
            </p>
        </div>
    </div>
)

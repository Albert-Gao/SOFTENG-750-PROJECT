import ReactModal from 'react-modal'
import { useAtom } from 'jotai'
import { submitNewsAtom } from '../../state'
import { SubmitNewsModalHeader } from './components/SubmitNewsModalHeader'
import { SubmitNewsModalField } from './components/SubmitNewsModalField'

export const SubmitNewsModal: React.FC<{
    isOpen: boolean
}> = ({ isOpen }) => {
    const [, setSubmitNewsAtom] = useAtom(submitNewsAtom)

    function closeModal() {
        setSubmitNewsAtom({ isSubmitNewsModalOpen: false })
    }

    return (
        <ReactModal
            closeTimeoutMS={400}
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="modal"
            className="flex overflow-hidden text-left align-bottom bg-white rounded-none shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:rounded-lg sm:max-h-180"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center sm:items-center"
        >
            <form className="flex flex-col bg-white divide-y divide-gray-200 shadow-xl">
                <div className="flex-1 h-0 overflow-y-auto">
                    <SubmitNewsModalHeader closeModal={closeModal} />
                    <div className="flex flex-col justify-between flex-1">
                        <div className="px-4 sm:px-6">
                            <div className="pt-6 pb-5 space-y-6">
                                <SubmitNewsModalField
                                    label=" Wikipedia URL"
                                    htmlFor="wiki-url"
                                >
                                    <input
                                        type="text"
                                        name="wiki-url"
                                        id="wiki-url"
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </SubmitNewsModalField>

                                <SubmitNewsModalField
                                    label="Description"
                                    htmlFor="description"
                                >
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={8}
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                </SubmitNewsModalField>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="pt-4 pb-6 pl-4">
                        <div className="flex mt-4 text-sm">
                            <a
                                href="#"
                                className="inline-flex items-center text-gray-500 group hover:text-gray-900"
                            >
                                {/* <!-- Heroicon name: solid/question-mark-circle --> */}
                                <svg
                                    className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span className="ml-2">
                                    Learn more about sharing
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-end flex-shrink-0 py-4 pr-4">
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </ReactModal>
    )
}

import ReactModal from 'react-modal'
import { useAtom } from 'jotai'
import { submitNewsAtom } from '../../state'
import { SubmitNewsModalHeader } from './components/SubmitNewsModalHeader'
import { SubmitNewsModalField } from './components/SubmitNewsModalField'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { createNewsAPI } from '../../api/news.api'
import { AxiosError } from 'axios'
import { FormErrorText } from '../FormErrorText'
import { useToasts } from 'react-toast-notifications'
import { useYupValidationResolver } from '../../utils/hooks/useYupValidationResolver'
import * as yup from 'yup'

const validationSchema = yup.object({
    wikipediaUrl: yup.string().required('Required').url(),
    authorWords: yup.string(),
})

export const SubmitNewsModal: React.FC<{
    isOpen: boolean
}> = ({ isOpen }) => {
    const { addToast } = useToasts()
    const [, setSubmitNewsAtom] = useAtom(submitNewsAtom)
    const resolver = useYupValidationResolver(validationSchema)
    const { register, handleSubmit, errors } = useForm<{
        wikipediaUrl: string
        authorWords: string
    }>({ resolver })
    const mutation = useMutation(createNewsAPI.query)

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
            <form
                className="flex flex-col bg-white divide-y divide-gray-200 shadow-xl"
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await mutation.mutateAsync(data)

                        closeModal()

                        addToast('Successfully submitted the news!', {
                            appearance: 'success',
                        })
                    } catch (e) {
                        addToast((e as AxiosError).response?.data?.message, {
                            appearance: 'error',
                        })
                    }
                })}
            >
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
                                        ref={register}
                                        type="text"
                                        name="wikipediaUrl"
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <FormErrorText
                                        isError={!!errors.wikipediaUrl}
                                    >
                                        Please enter valid wikipedia URL
                                    </FormErrorText>
                                </SubmitNewsModalField>

                                <SubmitNewsModalField
                                    label="Why I love this wikipedia (Optional)"
                                    htmlFor="description"
                                >
                                    <textarea
                                        ref={register}
                                        name="authorWords"
                                        rows={8}
                                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                    <FormErrorText
                                        isError={!!errors.authorWords}
                                    >
                                        Please enter valid words to say
                                    </FormErrorText>
                                </SubmitNewsModalField>
                            </div>
                        </div>
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
                        disabled={mutation.isLoading}
                        type="submit"
                        className="inline-flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </ReactModal>
    )
}

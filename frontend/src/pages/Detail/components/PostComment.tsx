import { useAtom } from 'jotai'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useToasts } from 'react-toast-notifications'
import { createCommentAPI } from '../../../api/comments.api'
import { userAtom } from '../../../state'
import { commentsAtom } from '../../../state/commentsAtom'
import { useCurrentUserAvatar } from '../../../utils/hooks/useCurrentUserAvatar'

const CurrentuserAvatar: React.FC = () => {
    const { currentUserAvatar } = useCurrentUserAvatar()

    return (
        <div className="flex-shrink-0">
            <img
                className="w-10 h-10 bg-gray-300 rounded-full"
                src={currentUserAvatar}
                alt="avatar"
            />
        </div>
    )
}

const NiceWords: React.FC = () => (
    <p className="inline-flex items-start space-x-2 text-sm text-gray-500 group">
        <svg
            className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
            />
        </svg>
        <span>Please be kind to the others :)</span>
    </p>
)

export const PostComment: React.FC<{ newsId: string }> = ({ newsId }) => {
    const [user] = useAtom(userAtom)
    const [, setCommentsAtom] = useAtom(commentsAtom)

    const mutation = useMutation(createCommentAPI.query, {
        onSuccess: () => {
            setCommentsAtom((v) => {
                return {
                    ...v,
                    news: {
                        ...v.news,
                        [newsId]: {
                            total: v.news[newsId]?.total ?? 0,
                            skipped: v.news[newsId]?.skipped ?? 0,
                            shouldUpdateCommentsList: true,
                        },
                    },
                }
            })
        },
    })
    const [text, setText] = useState('')
    const { addToast } = useToasts()

    return (
        <div className="px-4 py-6 mb-12 bg-gray-50 sm:px-6">
            <div className="flex space-x-3">
                <CurrentuserAvatar />
                <div className="flex-1 min-w-0">
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            if (!text) {
                                addToast(
                                    'Please type your comment before submitting',
                                    { appearance: 'error' },
                                )
                            }
                            try {
                                await mutation.mutateAsync({
                                    authorId: user._id,
                                    newsId,
                                    text,
                                })
                                addToast('Comment posted!', {
                                    appearance: 'success',
                                })
                                setText('')
                            } catch (e) {
                                addToast(e.message, { appearance: 'error' })
                            }
                        }}
                    >
                        <label htmlFor="comment" className="sr-only">
                            About
                        </label>
                        <textarea
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                            id="comment"
                            name="comment"
                            rows={3}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Add a note"
                        ></textarea>
                        <div className="flex items-center justify-between mt-3">
                            <NiceWords />
                            <button
                                disabled={mutation.isLoading}
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

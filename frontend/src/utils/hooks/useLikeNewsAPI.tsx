import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useMutation } from 'react-query'
import { useToasts } from 'react-toast-notifications'
import { voteNewsApi } from '../../api/news.api'
import { userAtom } from '../../state'

export const useLikeNewsAPI = ({
    refetch,
    newsId,
    isVoted,
}: {
    newsId: string
    isVoted: boolean
    refetch: () => void
}) => {
    const [currentUser] = useAtom(userAtom)
    const { addToast } = useToasts()
    const mutation = useMutation(
        () => voteNewsApi.query({ newsId, userId: currentUser._id, isVoted }),
        {
            onSuccess: refetch,
        },
    )

    useEffect(() => {
        if (mutation.status === 'error') {
            addToast(
                'Something wrong happened when voting, please try again later',
                { appearance: 'error' },
            )
        }
    }, [mutation.status, addToast])

    const LikeNewsAPILoadingSpinner: React.FC<{
        children: (mutateAsync: () => void) => JSX.Element
    }> = ({ children }) =>
        mutation.status === 'loading' ? (
            <div style={{ maxHeight: '20px' }}>
                <Loader
                    type="Bars"
                    color="rgba(79, 70, 229, var(--tw-bg-opacity))"
                    height={20}
                    width={20}
                />
            </div>
        ) : (
            children(mutation.mutateAsync)
        )

    return {
        LikeNewsAPILoadingSpinner,
    }
}

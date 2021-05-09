import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getCommentsAPI } from '../../../api/comments.api'
import { LoadQuery } from '../../../components/LoadQuery'
import { useUpdateComments } from '../../../utils/hooks/useUpdateComments'
import { CommentItem } from './CommentItem'
import { PostComment } from './PostComment'

const Container: React.FC = ({ children }) => (
    <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
        <div className="divide-y divide-gray-200">
            <div className="pb-4">
                <h2
                    id="activity-title"
                    className="text-lg font-medium text-gray-900"
                >
                    Comments
                </h2>
            </div>
            <div className="pt-4">
                <div className="flow-root">
                    <section aria-labelledby="notes-title">{children}</section>
                </div>
            </div>
        </div>
    </section>
)

const CommentsContainer: React.FC = ({ children }) => (
    <div className="sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
            <div className="px-4 pb-8 sm:px-6">
                <ul className="space-y-8">{children}</ul>
            </div>
        </div>
    </div>
)

export const Comments: React.FC<{ newsId: string }> = ({ newsId }) => {
    const {
        setCommentsAtom,
        commentsInfo,
        toggleUpdateComments,
        shouldUpdateCommentsList,
    } = useUpdateComments(newsId)
    const { data, refetch, status, error } = useQuery(
        [getCommentsAPI.queryKey, { newsId }],
        () =>
            getCommentsAPI.query({
                skipped: commentsInfo?.skipped ?? 0,
                newsId,
            }),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (!response) return

                const { total, skip } = response
                setCommentsAtom((v) => ({
                    ...v,
                    [newsId]: { total, skipped: skip },
                }))
            },
        },
    )

    useEffect(() => {
        if (shouldUpdateCommentsList) {
            refetch()
            toggleUpdateComments()
        }
    }, [
        shouldUpdateCommentsList,
        newsId,
        refetch,
        setCommentsAtom,
        toggleUpdateComments,
    ])

    return (
        <Container>
            <PostComment newsId={newsId} />

            <LoadQuery
                status={status}
                data={data}
                refetch={refetch}
                error={error}
            >
                {(data) => {
                    const response = data?.data ?? []

                    if (response.length === 0) {
                        return null
                    }

                    return (
                        <CommentsContainer>
                            {response.map((commentInfo) => (
                                <li key={commentInfo._id}>
                                    <CommentItem
                                        authorId={commentInfo.author._id}
                                        text={commentInfo.text}
                                        authorName={commentInfo.author.nickName}
                                        avatar={commentInfo.author.avatar}
                                        createdAt={commentInfo.createdAt}
                                    />
                                </li>
                            ))}
                        </CommentsContainer>
                    )
                }}
            </LoadQuery>
        </Container>
    )
}

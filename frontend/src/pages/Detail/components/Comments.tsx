import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getCommentsAPI } from '../../../api/comments.api'
import { LoadQuery } from '../../../components/LoadQuery'
import { commentsAtom } from '../../../state/commentsAtom'
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
    const [{ news }, setCommentsAtom] = useAtom(commentsAtom)
    const commentsInfo = news[newsId] ?? {
        skipped: 0,
        total: 0,
        shouldUpdateCommentsList: false,
    }
    const { data, refetch, status } = useQuery(
        [getCommentsAPI.queryKey, { newsId }],
        () =>
            getCommentsAPI.query({
                skipped: commentsInfo?.skipped ?? 0,
            }),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (!response?.data) return

                const { total, skip } = response.data
                setCommentsAtom((v) => ({
                    ...v,
                    [newsId]: { total, skipped: skip },
                }))
            },
        },
    )

    useEffect(() => {
        if (commentsInfo.shouldUpdateCommentsList) {
            refetch()
            setCommentsAtom((v) => ({
                news: {
                    ...v.news,
                    [newsId]: {
                        skipped: v.news[newsId].skipped,
                        total: v.news[newsId].total,
                        shouldUpdateCommentsList: false,
                    },
                },
            }))
        }
    }, [
        commentsInfo.shouldUpdateCommentsList,
        newsId,
        refetch,
        setCommentsAtom,
    ])

    return (
        <Container>
            <PostComment newsId={newsId} />

            <LoadQuery status={status} data={data} refetch={refetch}>
                {(data) => {
                    const response = data?.data?.data ?? []

                    if (response.length === 0) {
                        return null
                    }

                    return (
                        <CommentsContainer>
                            {response.map((commentInfo) => (
                                <li
                                    key={
                                        // @ts-ignore
                                        commentInfo._id
                                    }
                                >
                                    <CommentItem
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

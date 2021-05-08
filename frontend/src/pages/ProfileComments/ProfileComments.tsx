import React from 'react'
import { useQuery } from 'react-query'
import { getCurrentUserCommentsAPI } from '../../api/comments.api'
import { LoadQuery } from '../../components/LoadQuery'
import { CommentItem } from '../Detail/components/CommentItem'

const ProfileComments: React.FC = () => {
    const {
        status,
        refetch,
        data,
    } = useQuery(getCurrentUserCommentsAPI.queryKey, () =>
        getCurrentUserCommentsAPI.query({ skipped: 0 }),
    )

    return (
        <ul className="flex flex-col px-8 overflow-y-auto lg:col-span-6">
            <LoadQuery status={status} data={data} refetch={refetch}>
                {(data) =>
                    data?.data.map((commentInfo) => (
                        <CommentItem
                            key={commentInfo._id}
                            css="my-12"
                            text={commentInfo.text}
                            authorName={commentInfo.author.nickName}
                            avatar={commentInfo.author.avatar}
                            createdAt={commentInfo.createdAt}
                        />
                    ))
                }
            </LoadQuery>
        </ul>
    )
}

export default ProfileComments

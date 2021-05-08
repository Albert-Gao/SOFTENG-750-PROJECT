import React from 'react'
import { useQuery } from 'react-query'
import { getFavNewsApi } from '../../api/news.api'
import { LoadQuery } from '../../components/LoadQuery'
import { NewsListItem } from '../Home/components/NewsListItem/NewsListItem'

const ProfileFavList: React.FC = () => {
    const { status, refetch, data, error } = useQuery(
        getFavNewsApi.queryKey,
        () => getFavNewsApi.query({}),
    )

    return (
        <ul className="flex flex-col items-center divide-y divide-gray-200 pt-14 lg:col-span-9">
            <LoadQuery
                status={status}
                data={data}
                refetch={refetch}
                error={error}
            >
                {(data) => (
                    <>
                        {data?.map(
                            ({
                                title,
                                wikipediaUrl,
                                author,
                                createdAt,
                                description,
                                authorWords,
                                _id,
                                commentsCount,
                                votingRecords,
                            }) => (
                                <li
                                    key={_id}
                                    className="w-full max-w-2xl px-4 py-6 mb-12 bg-white rounded-lg shadow sm:p-6"
                                >
                                    <NewsListItem
                                        authorId={author._id}
                                        id={_id}
                                        wikipediaUrl={wikipediaUrl}
                                        authorName={author.nickName}
                                        newsDate={createdAt}
                                        title={title}
                                        authorWords={authorWords}
                                        description={description}
                                        authorAvatar={author.avatar}
                                        commentsCount={commentsCount}
                                        votingRecords={votingRecords}
                                        refetch={refetch}
                                    />
                                </li>
                            ),
                        )}
                    </>
                )}
            </LoadQuery>
        </ul>
    )
}

export default ProfileFavList

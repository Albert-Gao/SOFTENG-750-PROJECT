import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { getNewsAPI } from '../../../api/news.api'
import { newsAtom } from '../../../state'
import { NewsListItem } from './NewsListItem/NewsListItem'
import { LoadQuery } from '../../../components/LoadQuery'

export const NewsList: React.FC = () => {
    const [{ skipped, shouldRefetch }, setNewsAtom] = useAtom(newsAtom)
    const pageQueryInfo = {
        skipped,
    }
    const { data, refetch, status, error } = useQuery(
        [getNewsAPI.queryKey, pageQueryInfo],
        () => getNewsAPI.query(pageQueryInfo),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (!response) return

                const { total, skip } = response
                setNewsAtom(({ shouldRefetch, ...rest }) => ({
                    ...rest,
                    totalNewsAvailable: total,
                    skipped: skip,
                    shouldRefetch,
                }))
            },
        },
    )

    useEffect(() => {
        if (shouldRefetch) {
            refetch()
            setNewsAtom((v) => ({
                ...v,
                shouldRefetch: false,
            }))
        }
    }, [shouldRefetch, refetch, setNewsAtom])

    return (
        <LoadQuery refetch={refetch} status={status} data={data} error={error}>
            {(data) => (
                <ul className="flex flex-col items-center space-y-4">
                    {data?.data.map(
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
                                data-testid={_id}
                                className="w-full max-w-2xl px-4 py-6 bg-white rounded-lg shadow sm:p-6"
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
                </ul>
            )}
        </LoadQuery>
    )
}

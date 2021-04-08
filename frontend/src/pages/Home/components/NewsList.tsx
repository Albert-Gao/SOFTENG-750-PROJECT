import React from 'react'
import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { getNewsAPI } from '../../../api/news.api'
import { getNewsListAtom } from '../../../state'
import { NewsListItem } from './NewsListItem/NewsListItem'
import { LoadQuery } from '../../../components/LoadQuery'

export const NewsList: React.FC = () => {
    const [{ skipped }, setGetNewsListAtom] = useAtom(getNewsListAtom)
    const pageQueryInfo = {
        skipped,
    }
    const { data, refetch, status } = useQuery(
        [getNewsAPI.queryKey, pageQueryInfo],
        () => getNewsAPI.query(pageQueryInfo),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (!response?.data) return

                const { total, skip } = response.data
                setGetNewsListAtom({
                    totalNewsAvailable: total,
                    skipped: skip,
                })
            },
        },
    )

    return (
        <LoadQuery refetch={refetch} status={status} data={data}>
            {(data) => (
                <ul className="space-y-4">
                    {data?.data.data.map(
                        ({
                            title,
                            wikipediaUrl,
                            author,
                            createdAt,
                            description,
                            authorWords,
                        }) => (
                            <li className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                                <NewsListItem
                                    wikipediaUrl={wikipediaUrl}
                                    authorName={author.nickName}
                                    newsDate={createdAt}
                                    title={title}
                                    authorWords={authorWords}
                                    description={description}
                                />
                            </li>
                        ),
                    )}
                </ul>
            )}
        </LoadQuery>
    )
}

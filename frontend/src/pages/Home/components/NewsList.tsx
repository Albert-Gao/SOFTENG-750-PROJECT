import React from 'react'
import { useQuery } from 'react-query'
import { useAtom } from 'jotai'
import { getNewsAPI } from '../../../api/news.api'
import { getNewsListAtom } from '../../../state'
import { NewsListItem } from './NewsListItem/NewsListItem'

export const NewsList: React.FC = () => {
    const [{ totalNewsCount, currentListLength }] = useAtom(getNewsListAtom)
    const pageQueryInfo = { skip: totalNewsCount - currentListLength }
    const { isLoading, isError, data } = useQuery(
        [getNewsAPI.queryKey, pageQueryInfo],
        () => getNewsAPI.query(pageQueryInfo),
        {
            keepPreviousData: true,
        },
    )

    if (isLoading) {
        return <div>LOADING...</div>
    }

    if (isError) {
        return <div>ERROR, plz retry...</div>
    }

    if (data) {
        console.log(data.data)
        return (
            <ul className="space-y-4">
                {data?.data.data.map(
                    ({
                        title,
                        wikipediaUrl,
                        author,
                        createdAt,
                        description,
                    }) => (
                        <li className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                            <NewsListItem
                                wikipediaUrl={wikipediaUrl}
                                authorName={author.nickName}
                                newsDate={createdAt}
                                title={title}
                                description={description}
                            />
                        </li>
                    ),
                )}
            </ul>
        )
    }

    return null
}

import { useQuery } from 'react-query'
import { getCurrentUserSubmittedNewsAPI } from '../../../api/news.api'
import { LoadQuery } from '../../../components/LoadQuery'
import { NewsListItem } from '../../Home/components/NewsListItem/NewsListItem'
import { TabBox } from './TabBox'

export const SubmittedNewsTab: React.FC<{
    shouldShowSubmittedNews: boolean
    userId: string
}> = ({ userId, shouldShowSubmittedNews }) => {
    const { status, data, refetch } = useQuery(
        getCurrentUserSubmittedNewsAPI.queryKey,
        () => {
            if (shouldShowSubmittedNews) {
                return getCurrentUserSubmittedNewsAPI.query({
                    userId,
                    skipped: 0,
                })
            } else {
                return (null as unknown) as ReturnType<
                    typeof getCurrentUserSubmittedNewsAPI.query
                >
            }
        },
    )
    if (!shouldShowSubmittedNews) {
        return <TabBox>This user hides his/her submission list.</TabBox>
    }
    return (
        <TabBox>
            <ul className="flex flex-col items-center divide-y divide-gray-200 pt-14 lg:col-span-9">
                <LoadQuery status={status} data={data} refetch={refetch}>
                    {(data) => {
                        if (!data) return null

                        if (data?.data.length === 0) {
                            return <>This user has no submission yet.</>
                        }

                        return (
                            <>
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
                        )
                    }}
                </LoadQuery>
            </ul>
        </TabBox>
    )
}

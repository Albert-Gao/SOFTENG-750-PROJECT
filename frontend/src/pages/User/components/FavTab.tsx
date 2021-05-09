import { News } from '../../../utils/types'
import { NewsListItem } from '../../Home/components/NewsListItem/NewsListItem'
import { TabBox } from './TabBox'

export const FavTab: React.FC<{
    favNews: News[]
    shouldShowFavouritePage: boolean
}> = ({ favNews, shouldShowFavouritePage }) => {
    if (!shouldShowFavouritePage) {
        return <TabBox>This user hides his/her favourites news list.</TabBox>
    }

    if (favNews.length === 0 || typeof favNews[0] === 'string') {
        return <TabBox>This user has not added any favourites news yet.</TabBox>
    }
    console.log('favNews', JSON.stringify(favNews))
    return (
        <TabBox>
            <ul className="flex flex-col items-center divide-y divide-gray-200 pt-14 lg:col-span-9">
                {favNews.map(
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
                                refetch={() => {}}
                            />
                        </li>
                    ),
                )}
            </ul>
        </TabBox>
    )
}

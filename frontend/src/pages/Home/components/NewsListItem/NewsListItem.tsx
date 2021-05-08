import { AuthorAvatar } from './components/AuthorAvatar'
import { AuthorName } from './components/AuthorName'
import { AuthorWords } from '../../../../components/AuthorWords'
import { NewsDate } from './components/NewsDate'
import { NewsDescription } from './components/NewsDescription'
import { NewsItemMenuButton } from './components/NewsItemMenuButton'
import { NewsTitle } from './components/NewsTitle'
import { ShareButton } from './components/ShareButton'
import { User } from '../../../../utils/types'
import { userAtom } from '../../../../state'
import { useAtom } from 'jotai'
import { AvatarWall } from '../../../../components/AvatarWall'
import { CommentActionButton } from './components/CommentActionButton'
import { LikeActionButton } from './components/LikeActionButton'

export const NewsListItem: React.FC<{
    id: string
    authorAvatar?: string
    authorName: string
    newsDate: string
    title: string
    description: string
    wikipediaUrl: string
    authorWords?: string
    commentsCount: number
    votingRecords: Array<User>
    authorId: string
    refetch: () => void
}> = ({
    authorId,
    id,
    authorAvatar,
    authorName,
    newsDate,
    title,
    description,
    wikipediaUrl,
    authorWords,
    commentsCount = 0,
    votingRecords = [],
    refetch,
}) => {
    const [currentUser] = useAtom(userAtom)

    return (
        <article
            aria-labelledby="question-title"
            className="w-full"
            data-testid="wiki-news-list-item"
        >
            <div>
                <div className="flex space-x-3">
                    <AuthorAvatar avatarSrc={authorAvatar} userId={authorId} />
                    <div className="flex-1 min-w-0">
                        <AuthorName name={authorName} userId={authorId} />
                        <NewsDate id={id} dateString={newsDate} />
                    </div>
                    <div className="flex self-center flex-shrink-0">
                        <div className="relative inline-block text-left">
                            <NewsItemMenuButton id={id} />
                        </div>
                    </div>
                </div>
            </div>

            <AuthorWords authorWords={authorWords} />

            <NewsTitle wikipediaUrl={wikipediaUrl} text={title} />

            <NewsDescription text={description} />

            <div className="flex justify-between mt-6 space-x-8">
                <div className="flex space-x-6">
                    <LikeActionButton
                        quantity={votingRecords.length}
                        newsId={id}
                        isVoted={
                            !!votingRecords.find(
                                (user) => user._id === currentUser._id,
                            )
                        }
                        refetch={refetch}
                    >
                        <AvatarWall avatarList={votingRecords} />
                    </LikeActionButton>
                    <CommentActionButton id={id} quantity={commentsCount} />
                </div>
                <ShareButton newsId={id} newsTitle={title} />
            </div>
        </article>
    )
}

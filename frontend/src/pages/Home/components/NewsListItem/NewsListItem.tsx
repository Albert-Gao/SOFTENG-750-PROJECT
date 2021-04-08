import { ActionButton } from './components/ActionButton'
import { AuthorAvatar } from './components/AuthorAvatar'
import { AuthorName } from './components/AuthorName'
import { AuthorWords } from './components/AuthorWords'
import { NewsDate } from './components/NewsDate'
import { NewsDescription } from './components/NewsDescription'
import { NewsItemMenuButton } from './components/NewsItemMenuButton'
import { NewsTitle } from './components/NewsTitle'
import { ShareButton } from './components/ShareButton'

export const NewsListItem: React.FC<{
    authorAvatar?: string
    authorName: string
    newsDate: string
    title: string
    description: string
    wikipediaUrl: string
    authorWords?: string
}> = ({
    // TODO: remove this after finising avatar feature
    authorAvatar = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    authorName,
    newsDate,
    title,
    description,
    wikipediaUrl,
    authorWords,
}) => {
    return (
        <article aria-labelledby="question-title-81614" className="w-full">
            <div>
                <div className="flex space-x-3">
                    <AuthorAvatar avatarSrc={authorAvatar} />
                    <div className="flex-1 min-w-0">
                        <AuthorName name={authorName} />
                        <NewsDate dateString={newsDate} />
                    </div>
                    <div className="flex self-center flex-shrink-0">
                        <div className="relative inline-block text-left">
                            <NewsItemMenuButton />
                        </div>
                    </div>
                </div>
            </div>

            <AuthorWords authorWords={authorWords} />

            <NewsTitle wikipediaUrl={wikipediaUrl} text={title} />

            <NewsDescription text={description} />

            <div className="flex justify-between mt-6 space-x-8">
                <div className="flex space-x-6">
                    <ActionButton quantity={29} ariaLabel="likes" icon="like" />
                    <ActionButton
                        quantity={30}
                        ariaLabel="replies"
                        icon="reply"
                    />
                </div>
                <ShareButton />
            </div>
        </article>
    )
}

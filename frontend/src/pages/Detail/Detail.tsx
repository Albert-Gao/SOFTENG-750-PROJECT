import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleNewsAPI } from '../../api/news.api'
import { AuthorWords } from '../../components/AuthorWords'
import { AvatarWall } from '../../components/AvatarWall'
import { LoadQuery } from '../../components/LoadQuery'
import { PATHS } from '../../routes/routes.constants'
import { userAtom } from '../../state'
import { useUpdateComments } from '../../utils/hooks/useUpdateComments'
import { AddToFavouriteButton } from './components/AddToFavouriteButton'
import { CheckWikiPageButton } from './components/CheckWikiPageButton'
import { Comments } from './components/Comments'
import { InfoPanel } from './components/InfoPanel'
import { SectionTitle } from './components/SectionTitle'

const Box: React.FC = ({ children }) => (
    <div
        className="flex h-screen overflow-hidden bg-white"
        style={{ height: 'max-content' }}
    >
        <div className="flex flex-col flex-1 w-0">
            <main className="relative flex-1 focus:outline-none">
                <div className="py-8 xl:py-10">
                    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
                        {children}{' '}
                    </div>
                </div>
            </main>
        </div>
    </div>
)

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [currentUser] = useAtom(userAtom)
    const history = useHistory()
    const { data, refetch, status, error } = useQuery(
        getSingleNewsAPI.queryKey,
        () => getSingleNewsAPI.query({ id }),
    )
    const {
        toggleUpdateComments,
        shouldUpdateCommentsList,
    } = useUpdateComments(id)

    useEffect(() => {
        if (!id) {
            history.replace(PATHS.HOME)
        }
    }, [history, id])

    useEffect(() => {
        if (shouldUpdateCommentsList) {
            refetch()
            toggleUpdateComments()
        }
    }, [refetch, shouldUpdateCommentsList, toggleUpdateComments])

    return (
        <LoadQuery status={status} refetch={refetch} data={data} error={error}>
            {(data) => {
                if (!data) return null

                const isVoted = !!data.votingRecords.find(
                    (record) => record._id === currentUser._id,
                )

                const avatarWall = (
                    <AvatarWall avatarList={data.votingRecords} />
                )

                return (
                    <Box>
                        <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
                            <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {data.title}
                                </h2>
                                <div className="flex mt-4 space-x-3 md:mt-0">
                                    <AddToFavouriteButton id={data._id} />
                                    <CheckWikiPageButton
                                        wikipediaUrl={data.wikipediaUrl}
                                    />
                                </div>
                            </div>
                            <InfoPanel
                                refetch={refetch}
                                isVoted={isVoted}
                                newsId={data._id}
                                isMobile={true}
                                commentsCount={data.commentsCount}
                                votesCount={data.votingRecords.length}
                                createdAt={data.createdAt}
                                authorNickName={data.author.nickName}
                                authorAvatar={data.author.avatar}
                            >
                                {avatarWall}
                            </InfoPanel>
                            <div className="mt-5">
                                <SectionTitle>Why I like it?</SectionTitle>
                                <AuthorWords authorWords={data.authorWords} />
                            </div>
                            {data.description && (
                                <div className="py-3 mt-7 xl:pt-6 xl:pb-0">
                                    <h2 className="sr-only">Description</h2>
                                    <SectionTitle>Brief</SectionTitle>
                                    <div className="prose max-w-none">
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            )}
                            <Comments newsId={id} />
                        </div>

                        <InfoPanel
                            refetch={refetch}
                            isVoted={isVoted}
                            newsId={data._id}
                            isMobile={false}
                            createdAt={data.createdAt}
                            authorNickName={data.author.nickName}
                            authorAvatar={data.author.avatar}
                            commentsCount={data.commentsCount}
                            votesCount={data.votingRecords.length}
                        >
                            {avatarWall}
                        </InfoPanel>
                    </Box>
                )
            }}
        </LoadQuery>
    )
}

export default Detail

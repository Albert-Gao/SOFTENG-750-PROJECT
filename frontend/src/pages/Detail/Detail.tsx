import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { PATHS } from '../../routes/routes.constants'
import { AddToFavouriteButton } from './components/AddToFavouriteButton'
import { CheckWikiPageButton } from './components/CheckWikiPageButton'
import { Comments } from './components/Comments'
import { InfoPanel } from './components/InfoPanel'

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
    const history = useHistory()
    useEffect(() => {
        if (!id) {
            history.replace(PATHS.HOME)
        }
    }, [history, id])

    return (
        <Box>
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
                <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        ARIA attribute misspell
                    </h2>
                    <div className="flex mt-4 space-x-3 md:mt-0">
                        <AddToFavouriteButton id={''} />
                        <CheckWikiPageButton />
                    </div>
                </div>
                <InfoPanel isMobile={true} />
                <div className="py-3 xl:pt-6 xl:pb-0">
                    <h2 className="sr-only">Description</h2>
                    <div className="prose max-w-none">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, hic? Commodi cumque similique id
                            tempora molestiae deserunt at suscipit, dolor
                            voluptatem, numquam, harum consequatur laboriosam
                            voluptas tempore aut voluptatum alias?
                        </p>
                    </div>
                </div>
                <Comments />
            </div>

            <InfoPanel isMobile={false} />
        </Box>
    )
}

export default Detail

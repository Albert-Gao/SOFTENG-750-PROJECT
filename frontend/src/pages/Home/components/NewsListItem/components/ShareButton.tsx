import React, { useState } from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    PocketShareButton,
    RedditShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    PocketIcon,
    RedditIcon,
    TwitterIcon,
} from 'react-share'
import { getUrl } from '../../../../../api/api.utils'

const ICON_SIZE = 32

const ButtonBox: React.FC = ({ children }) => (
    <div className="mr-1">{children}</div>
)

const getTitle = (newsTitle: string) =>
    `Hi, I found an interesting Wikipedia about ${newsTitle} to share with you`

const Buttons: React.FC<{ urlToShare: string; newsTitle: string }> = ({
    urlToShare,
    newsTitle,
}) => {
    return (
        <div className="absolute z-50 flex p-3 bg-white border-gray-100 rounded-lg shadow top-7 broder-solid">
            <ButtonBox>
                <EmailShareButton
                    url={urlToShare}
                    subject={getTitle(newsTitle)}
                >
                    <EmailIcon size={ICON_SIZE} />
                </EmailShareButton>
            </ButtonBox>

            <ButtonBox>
                <FacebookShareButton
                    url={urlToShare}
                    quote={getTitle(newsTitle)}
                >
                    <FacebookIcon size={ICON_SIZE} />
                </FacebookShareButton>
            </ButtonBox>

            <ButtonBox>
                <TwitterShareButton
                    url={urlToShare}
                    title={getTitle(newsTitle)}
                >
                    <TwitterIcon size={ICON_SIZE} />
                </TwitterShareButton>
            </ButtonBox>

            <ButtonBox>
                <RedditShareButton url={urlToShare} title={getTitle(newsTitle)}>
                    <RedditIcon size={ICON_SIZE} />
                </RedditShareButton>
            </ButtonBox>

            <div>
                <PocketShareButton url={urlToShare} title={getTitle(newsTitle)}>
                    <PocketIcon size={ICON_SIZE} />
                </PocketShareButton>
            </div>
        </div>
    )
}

export const ShareButton: React.FC<{ newsId: string; newsTitle: string }> = ({
    newsId,
    newsTitle,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex text-sm">
            <span className="inline-flex items-center text-sm">
                <button
                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    type="button"
                    onClick={() => {
                        setIsOpen((v) => !v)
                    }}
                >
                    {/* <!-- Heroicon name: solid/share --> */}
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span className="font-medium text-gray-900">Share</span>
                </button>
            </span>
            {isOpen && (
                <Buttons
                    urlToShare={getUrl(`/detail/${newsId}`)}
                    newsTitle={newsTitle}
                />
            )}
        </div>
    )
}

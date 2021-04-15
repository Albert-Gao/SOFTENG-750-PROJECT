interface TimeStamp {
    createdAt: string
    updatedAt: string
}

interface ID {
    _id: string
}

export interface User extends TimeStamp, ID {
    email: string
    password: string
    nickName: string
    avatar: string
    favourites: string[]
    privacy: {
        shouldShowEmail: boolean
        shouldShowFavouritePage: boolean
        shouldShowSubmittedNews: boolean
    }
}

export interface News extends TimeStamp, ID {
    title: string
    description: string
    authorWords: string
    wikipediaUrl: string
    author: User
    votingRecords: [User]
    commentsCount: number
}

export interface NewsComment extends TimeStamp, ID {
    news: string
    author: User
    text: string
}

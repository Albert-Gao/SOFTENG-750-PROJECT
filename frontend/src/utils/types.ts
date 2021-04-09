export interface User {
    createdAt: string
    email: string
    password: string
    updatedAt: string
    nickName: string
    avatar: string
}

export interface News {
    title: string
    description: string
    authorWords: string
    vote: number
    _id: string
    wikipediaUrl: string
    author: User
    createdAt: string
    updatedAt: string
}

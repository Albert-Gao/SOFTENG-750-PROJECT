import { atom } from 'jotai'
import { User } from '../utils/types'

export const userAtom = atom<Omit<User, 'password'>>({
    avatar: '',
    createdAt: '',
    email: '',
    nickName: '',
    updatedAt: '',
    favourites: [],
    _id: '',
})

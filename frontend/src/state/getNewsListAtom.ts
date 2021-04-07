import { atom } from 'jotai'

export const getNewsListAtom = atom({
    totalNewsCount: 0,
    currentListLength: 0,
})

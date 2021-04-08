import { atom } from 'jotai'

export const getNewsListAtom = atom({
    totalNewsAvailable: 0,
    skipped: 0,
})

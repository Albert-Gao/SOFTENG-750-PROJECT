import { atom } from 'jotai'

export const newsAtom = atom({
    totalNewsAvailable: 0,
    skipped: 0,
    shouldRefetch: false,
    isSubmitNewsModalOpen: false,
})

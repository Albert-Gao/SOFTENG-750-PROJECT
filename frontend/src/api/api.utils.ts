export const getUrl = (url: string) =>
    `${
        process.env.NODE_ENV === 'development' ? 'http://localhost:3030' : ''
    }${url}`

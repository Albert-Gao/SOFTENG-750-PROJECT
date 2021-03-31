export const getUrl = (url: string) =>
    `${
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3030'
            : process.env.REACT_APP_SERVER_URL
    }${url}`

import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { PATHS } from '../routes/routes.constants'
import { Spinner } from './Spinner'

const ReloadButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
    >
        Retry
    </button>
)

const Box: React.FC = ({ children }) => (
    <div className="flex flex-col items-center justify-center w-full p-6 rounded-md shadow bg-gray-50">
        {children}
    </div>
)

export function LoadQuery<ResponseDataType>({
    status,
    refetch,
    data,
    children,
    error,
}: {
    error: any
    status: ReturnType<typeof useQuery>['status']
    refetch: (
        options?: RefetchOptions,
    ) => Promise<QueryObserverResult<ResponseDataType, any>>
    data: ResponseDataType
    children: (
        data: ResponseDataType,
    ) => JSX.Element | JSX.Element[] | null | undefined
}): JSX.Element | null {
    if (
        status === 'error' &&
        error?.response?.data?.code === 401 &&
        error?.response?.data?.name === 'NotAuthenticated'
    ) {
        return (
            <Box>
                <span className="w-full mb-2 text-lg font-bold text-center">
                    This page is for authenticated user only, please login first
                </span>
                <Link
                    className="flex items-center justify-center w-full max-w-sm px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-2 md:text-lg md:px-3"
                    to={PATHS.LOGIN}
                >
                    Login
                </Link>
            </Box>
        )
    }

    if (status === 'loading') {
        return (
            <Box>
                <Spinner />
            </Box>
        )
    }

    if (status === 'error') {
        console.log('d', data)
        return (
            <Box>
                <span className="w-full text-sm text-center">
                    Error when loading, please retry later
                </span>
                <ReloadButton onClick={refetch} />
            </Box>
        )
    }

    if (status === 'success' && data) {
        return <>{children(data)}</>
    }

    return null
}

import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query'
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
}: {
    status: ReturnType<typeof useQuery>['status']
    refetch: (
        options?: RefetchOptions,
    ) => Promise<QueryObserverResult<ResponseDataType, any>>
    data: ResponseDataType
    children: (
        data: ResponseDataType,
    ) => JSX.Element | JSX.Element[] | null | undefined
}): JSX.Element | null {
    if (status === 'loading') {
        return (
            <Box>
                <Spinner />
            </Box>
        )
    }

    if (status === 'error') {
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

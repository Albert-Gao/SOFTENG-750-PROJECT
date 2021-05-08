import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'

const client = new QueryClient()

export const TestWrapper: React.FC = ({ children }) => (
    <ToastProvider>
        <QueryClientProvider client={client}>
            <MemoryRouter>{children}</MemoryRouter>
        </QueryClientProvider>
    </ToastProvider>
)

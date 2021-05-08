import { QueryClient, QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'

const client = new QueryClient()

export const TestWrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={client}>
        <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
)

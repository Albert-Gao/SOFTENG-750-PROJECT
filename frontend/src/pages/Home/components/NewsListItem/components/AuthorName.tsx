import { Link } from 'react-router-dom'
import { PATHS } from '../../../../../routes/routes.constants'

export const AuthorName: React.FC<{ name: string; userId: string }> = ({
    userId,
    name,
}) => (
    <p className="text-sm font-medium text-gray-900">
        <Link to={PATHS.USER_RAW + userId} className="hover:underline">
            {name}
        </Link>
    </p>
)

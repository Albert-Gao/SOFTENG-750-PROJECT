import { Link } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'

export const FooterNavItem: React.FC<{ path: PATHS }> = ({
    path,
    children,
}) => (
    <div className="px-5 py-2">
        <Link to={path} className="text-base text-gray-300 hover:text-white">
            {children}
        </Link>
    </div>
)

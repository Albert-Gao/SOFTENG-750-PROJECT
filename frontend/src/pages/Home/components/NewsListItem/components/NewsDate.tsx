import { Link } from 'react-router-dom'
import { PATHS } from '../../../../../routes/routes.constants'
import { DateTime } from '../../../../../utils/DateTime'

export const NewsDate: React.FC<{ id: string; dateString: string }> = ({
    dateString,
    id,
}) => (
    <p className="text-sm text-gray-500">
        <Link
            to={PATHS.DETAIL_RAW + id}
            className="hover:underline"
            title={DateTime.formatToLocal(dateString)}
        >
            <time dateTime="2020-12-09T11:43:00">
                {DateTime.utc2LocalRelative(dateString)}
            </time>
        </Link>
    </p>
)

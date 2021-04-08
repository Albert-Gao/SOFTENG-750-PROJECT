import { DateTime } from '../../../../../utils/DateTime'

export const NewsDate: React.FC<{ dateString: string }> = ({ dateString }) => (
    <p className="text-sm text-gray-500">
        <a
            href="#"
            className="hover:underline"
            title={DateTime.formatToLocal(dateString)}
        >
            <time dateTime="2020-12-09T11:43:00">
                {DateTime.utc2LocalRelative(dateString)}
            </time>
        </a>
    </p>
)

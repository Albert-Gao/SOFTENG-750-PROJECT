export const NewsDate: React.FC<{ dateString: string }> = ({ dateString }) => (
    <p className="text-sm text-gray-500">
        <a href="#" className="hover:underline">
            <time dateTime="2020-12-09T11:43:00">{dateString}</time>
        </a>
    </p>
)

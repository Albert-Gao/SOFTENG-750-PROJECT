export const NewsTitle: React.FC<{ text: string; wikipediaUrl: string }> = ({
    text,
    wikipediaUrl,
}) => (
    <h2 className="mt-5 text-base font-medium text-gray-900">
        <a
            id="question-title-81614"
            target="_blank"
            rel="noopener noreferrer"
            href={wikipediaUrl}
        >
            {text}
        </a>
    </h2>
)

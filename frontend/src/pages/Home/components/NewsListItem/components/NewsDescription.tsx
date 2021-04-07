export const NewsDescription: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null

    return (
        <div className="mt-2 space-y-4 text-sm text-gray-700">
            <p>{text}</p>
        </div>
    )
}

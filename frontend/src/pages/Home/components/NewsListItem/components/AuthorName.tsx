export const AuthorName: React.FC<{ name: string }> = ({ name }) => (
    <p className="text-sm font-medium text-gray-900">
        <a href="#" className="hover:underline">
            {name}
        </a>
    </p>
)

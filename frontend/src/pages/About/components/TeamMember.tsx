export const TeamMember: React.FC<{
    portraitSrc: string
    name: string
    title: string
    description: string
}> = ({ portraitSrc, name, title, description }) => (
    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
            <img
                className="object-cover rounded-lg shadow-lg"
                src={portraitSrc}
                alt={name}
            />
        </div>
        <div className="sm:col-span-2">
            <div className="space-y-4">
                <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>{name}</h3>
                    <p className="text-indigo-600">{title}</p>
                </div>
                <div className="text-lg">
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    </div>
)

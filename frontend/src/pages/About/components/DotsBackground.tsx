export const DotsBackground: React.FC = () => (
    <svg
        className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
        width="404"
        height="392"
        fill="none"
        viewBox="0 0 404 392"
    >
        <defs>
            <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                />
            </pattern>
        </defs>
        <rect
            width="404"
            height="392"
            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
        />
    </svg>
)

export interface BaseActionButtonProps {
    quantity: number
    ariaLabel: string
    icon: JSX.Element
    onClick?: () => void
}

export const BaseActionButton: React.FC<BaseActionButtonProps> = ({
    quantity,
    ariaLabel,
    onClick,
    icon,
    children,
}) => {
    return (
        <span className="inline-flex items-center text-sm">
            <button
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                onClick={onClick}
            >
                {icon}
                <span className="font-medium text-gray-900">{quantity}</span>
                <span className="sr-only">{ariaLabel}</span>
            </button>
            {children}
        </span>
    )
}

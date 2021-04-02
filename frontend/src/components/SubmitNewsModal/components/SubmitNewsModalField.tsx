export const SubmitNewsModalField: React.FC<{
    label: string
    htmlFor: string
}> = ({ label, htmlFor, children }) => (
    <div>
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-gray-900"
        >
            {label}
        </label>
        <div className="mt-1">{children}</div>
    </div>
)

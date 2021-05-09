import { useForm } from 'react-hook-form'

export const PrivacySettingItem: React.FC<{
    title: string
    description: string
    isEnabled: boolean
    register: ReturnType<typeof useForm>['register']
    name: string
    onClick: () => void
}> = ({ onClick, name, register, title, description, isEnabled }) => {
    return (
        <li className="flex items-center justify-between py-4">
            <div className="flex flex-col">
                <p
                    className="text-sm font-medium text-gray-900"
                    id="privacy-option-1-label"
                >
                    {title}
                </p>
                <p
                    className="text-sm text-gray-500"
                    id="privacy-option-1-description"
                >
                    {description}
                </p>
            </div>
            <input
                ref={register}
                type="checkbox"
                name={name}
                className="hidden"
            />
            <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 ml-4 transition-colors duration-200 ease-in-out ${
                    isEnabled ? 'bg-indigo-500' : 'bg-gray-200'
                } border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500`}
                aria-pressed="true"
                aria-labelledby="privacy-option-1-label"
                aria-describedby="privacy-option-1-description"
                onClick={onClick}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`inline-block w-5 h-5 transition duration-200 ease-in-out transform ${
                        isEnabled ? 'translate-x-5' : 'translate-x-0'
                    } bg-white rounded-full shadow ring-0`}
                ></span>
            </button>
        </li>
    )
}

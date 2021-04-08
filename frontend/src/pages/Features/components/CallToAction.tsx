import { Link } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'

export const CallToAction: React.FC = () => (
    <div className="bg-indigo-600 rounded-lg">
        <div className="max-w-4xl px-6 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
                    Create an account for free!
                </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <Link
                    to={PATHS.REGISTER}
                    className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-800 border border-transparent rounded-md shadow-sm bg-indigo-50 hover:bg-indigo-100"
                >
                    Get started
                </Link>
            </div>
        </div>
    </div>
)

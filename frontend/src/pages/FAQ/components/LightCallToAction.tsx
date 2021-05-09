import { Link } from 'react-router-dom'
import { PATHS } from '../../../routes/routes.constants'

export const LightCallToAction: React.FC = () => (
    <div className="rounded-lg shadow bg-indigo-50">
        <div className="px-8 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-indigo-600">
                    Start sharing your ideas NOW
                </span>
            </h2>
            <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <Link
                        to={PATHS.REGISTER}
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                    >
                        Join for free
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

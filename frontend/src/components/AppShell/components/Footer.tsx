import { PATHS } from '../../../routes/routes.constants'
import { FooterGitHubButton } from './FooterGitHubButton'
import { FooterNavItem } from './FooterNavItem'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black">
            <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
                <nav
                    className="flex flex-wrap justify-center -mx-5 -my-2"
                    aria-label="Footer"
                >
                    <FooterNavItem path={PATHS.FEATURES}>
                        Features
                    </FooterNavItem>

                    <FooterNavItem path={PATHS.ABOUT}>About</FooterNavItem>
                    <FooterNavItem path={PATHS.FAQ}>FAQ</FooterNavItem>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <FooterGitHubButton />
                </div>
                <p className="mt-8 text-base text-center text-gray-400">
                    &copy; 2021 COMPSCI 732 Group 17 - Red Rhinoceros.
                </p>
                <p className="mt-1 text-base text-center text-gray-400">
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

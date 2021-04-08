import { DotsBackground } from './DotsBackground'
import { TestimonialCard } from './TestimonialCard'

export const Introduction: React.FC = () => (
    <div className="relative pt-6 pb-16 bg-white rounded-lg sm:pb-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
                <div
                    aria-hidden="true"
                    className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                    <DotsBackground />
                </div>
                <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    <TestimonialCard />
                </div>
            </div>

            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                {/* <!-- Content area --> */}
                <div className="pt-12 sm:pt-16 lg:pt-20">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        On a mission to empower teams
                    </h2>
                    <div className="mt-6 space-y-6 text-gray-500">
                        <p className="text-lg">
                            Sagittis scelerisque nulla cursus in enim
                            consectetur quam. Dictum urna sed consectetur neque
                            tristique pellentesque. Blandit amet, sed aenean
                            erat arcu morbi. Cursus faucibus nunc nisl netus
                            morbi vel porttitor vitae ut. Amet vitae fames
                            senectus vitae.
                        </p>
                        <p className="text-base leading-7">
                            Sollicitudin tristique eros erat odio sed vitae,
                            consequat turpis elementum. Lorem nibh vel, eget
                            pretium arcu vitae. Eros eu viverra donec ut
                            volutpat donec laoreet quam urna. Sollicitudin
                            tristique eros erat odio sed vitae, consequat turpis
                            elementum. Lorem nibh vel, eget pretium arcu vitae.
                            Eros eu viverra donec ut volutpat donec laoreet quam
                            urna.
                        </p>
                        <p className="text-base leading-7">
                            Rhoncus nisl, libero egestas diam fermentum dui. At
                            quis tincidunt vel ultricies. Vulputate aliquet
                            velit faucibus semper. Pellentesque in venenatis
                            vestibulum consectetur nibh id. In id ut tempus
                            egestas. Enim sit aliquam nec, a. Morbi enim
                            fermentum lacus in. Viverra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

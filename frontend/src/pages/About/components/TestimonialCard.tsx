export const TestimonialCard: React.FC = () => (
    <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
        <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://i.pinimg.com/originals/22/26/12/222612fa4abd15e83df16613dcd20b40.jpg"
            alt=""
        />
        <div
            className="absolute inset-0 bg-indigo-500"
            style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
        <div className="relative px-8">
            <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                        className="absolute top-0 left-0 w-8 h-8 text-indigo-400 transform -translate-x-3 -translate-y-2"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                        We are not enough to change the world, but at least we
                        tried.
                    </p>
                </div>

                <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">
                        Team 17 - Red Rhinoceros
                    </p>
                </footer>
            </blockquote>
        </div>
    </div>
)

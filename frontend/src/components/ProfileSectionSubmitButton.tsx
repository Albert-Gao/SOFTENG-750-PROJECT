export const ProfileSectionSubmitButton: React.FC = () => {
    return (
        <div className="flex justify-end px-4 py-4 mt-4 sm:px-6">
            <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 ml-5 text-sm font-medium text-white bg-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
                Save
            </button>
        </div>
    )
}

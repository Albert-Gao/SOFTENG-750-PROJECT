import React from 'react'

export const ProfileMenuToggleButton: React.FC<{
    onClick: React.EventHandler<React.SyntheticEvent>
}> = ({ onClick }) => {
    return (
        <div>
            <button
                type="button"
                className="flex text-sm text-white bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={onClick}
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </button>
        </div>
    )
}

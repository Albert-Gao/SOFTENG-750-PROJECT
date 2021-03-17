import React from 'react'

export const MobileProfileMenuUserInfo: React.FC = () => {
    return (
        <div className="flex items-center px-5">
            <div className="flex-shrink-0">
                <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=2p7Lkbbzs4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="ml-3">
                <div className="text-base font-medium text-white">Tom Cook</div>
                <div className="text-sm font-medium text-indigo-300">
                    tom@example.com
                </div>
            </div>
        </div>
    )
}

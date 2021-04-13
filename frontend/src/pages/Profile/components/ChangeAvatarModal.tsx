import { useAtom } from 'jotai'
import { useState } from 'react'
import ReactModal from 'react-modal'
import { useMutation } from 'react-query'
import { useToasts } from 'react-toast-notifications'
import { changeUserAvatarApi } from '../../../api/users.api'
import { Spinner } from '../../../components/Spinner'
import { userAtom } from '../../../state'
import { Auth } from '../../../utils/Auth'
import { SVG_SRC_MAP } from '../../../utils/getAvatarSVG'

type Avatar = keyof typeof SVG_SRC_MAP

export const ChangeAvatarModal: React.FC<{
    isOpen: boolean
    closeModal: () => void
}> = ({ isOpen, closeModal }) => {
    const { addToast } = useToasts()
    const [, setUserAtom] = useAtom(userAtom)
    const [avatar, setAvatar] = useState<Avatar>('' as Avatar)
    const mutation = useMutation(changeUserAvatarApi.query)

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="flex justify-center text-left align-bottom bg-white rounded-none shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:rounded-lg sm:max-h-180"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center sm:items-center"
        >
            <div className="flex flex-wrap">
                <button
                    type="button"
                    style={{ height: '60px', width: '60px' }}
                    className="p-2 m-5 text-2xl font-medium text-white bg-indigo-600 border-2 border-transparent border-white rounded-lg shadow-sm opacity-100 cursor-pointer hover:opacity-50 focus-within:opacity-50 hover:border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={closeModal}
                >
                    X
                </button>
                {Object.entries(SVG_SRC_MAP).map(([key, src]) =>
                    mutation.isLoading && key === avatar ? (
                        <div
                            className="p-2 m-5 border-2 border-white"
                            style={{ height: '60px', width: '60px' }}
                            key={key}
                        >
                            <Spinner />
                        </div>
                    ) : (
                        <img
                            key={key}
                            onClick={async () => {
                                setAvatar(key as Avatar)
                                mutation.mutateAsync(
                                    {
                                        newAvatar: key as Avatar,
                                    },
                                    {
                                        onSuccess: (data) => {
                                            setUserAtom((prev) => ({
                                                ...prev,
                                                avatar: key,
                                            }))
                                            setAvatar('' as Avatar)
                                            Auth.saveUserInfo(data)
                                            closeModal()
                                        },
                                        onError: () => {
                                            closeModal()
                                            addToast(
                                                'Something happened when updating, please try again later',
                                                { appearance: 'error' },
                                            )
                                        },
                                    },
                                )
                            }}
                            className="p-2 m-5 border-2 border-white rounded-lg opacity-100 cursor-pointer hover:opacity-50 focus-within:opacity-50 hover:border-indigo-700"
                            height={60}
                            width={60}
                            src={src}
                            alt={`avatar-${key}`}
                        />
                    ),
                )}
            </div>
        </ReactModal>
    )
}

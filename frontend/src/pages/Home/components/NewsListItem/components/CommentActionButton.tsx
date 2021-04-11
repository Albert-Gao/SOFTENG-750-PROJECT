import { useHistory } from 'react-router-dom'
import { PATHS } from '../../../../../routes/routes.constants'
import { BaseActionButton } from './BaseActionButton'

const replyIcon = (
    <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clipRule="evenodd"
        />
    </svg>
)

export const CommentActionButton: React.FC<{
    id: string
    quantity: number
}> = ({ quantity, id }) => {
    const history = useHistory()
    const onClickFunc = () => history.push(PATHS.DETAIL_RAW + id)

    return (
        <BaseActionButton
            ariaLabel="replies"
            onClick={onClickFunc}
            quantity={quantity}
            icon={replyIcon}
        />
    )
}

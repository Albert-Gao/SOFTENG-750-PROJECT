import { CommentItem } from './CommentItem'
import { PostComment } from './PostComment'

const Container: React.FC = ({ children }) => (
    <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
        <div className="divide-y divide-gray-200">
            <div className="pb-4">
                <h2
                    id="activity-title"
                    className="text-lg font-medium text-gray-900"
                >
                    Comments
                </h2>
            </div>
            <div className="pt-4">
                <div className="flow-root">
                    <section aria-labelledby="notes-title">{children}</section>
                </div>
            </div>
        </div>
    </section>
)

const CommentsContainer: React.FC = ({ children }) => (
    <div className="sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
            <div className="px-4 pb-8 sm:px-6">
                <ul className="space-y-8">{children}</ul>
            </div>
        </div>
    </div>
)

export const Comments: React.FC = () => {
    return (
        <Container>
            <PostComment />
            <CommentsContainer>
                <li>
                    <CommentItem />
                </li>
                <li>
                    <CommentItem />
                </li>
            </CommentsContainer>
        </Container>
    )
}

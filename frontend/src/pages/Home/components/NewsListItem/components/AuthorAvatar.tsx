export const AuthorAvatar: React.FC<{ avatarSrc: string }> = ({
    avatarSrc,
}) => (
    <div className="flex-shrink-0">
        <img className="w-10 h-10 rounded-full" src={avatarSrc} alt="" />
    </div>
)

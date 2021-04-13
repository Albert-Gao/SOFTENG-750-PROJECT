import Loader from 'react-loader-spinner'

export const Spinner: React.FC<{ height?: number; width?: number }> = ({
    height = 30,
    width = 30,
}) => (
    <Loader
        // @ts-ignore
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        }}
        type="Bars"
        color="rgba(79, 70, 229, var(--tw-bg-opacity))"
        height={height}
        width={width}
    />
)

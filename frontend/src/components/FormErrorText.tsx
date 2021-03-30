import React from 'react'

export const FormErrorText: React.FC<{ isError: boolean }> = ({
    isError,
    children,
}) =>
    isError ? <span className="block mt-1 text-red-500">{children}</span> : null

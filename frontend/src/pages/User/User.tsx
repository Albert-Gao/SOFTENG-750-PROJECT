import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getOtherUserInfoApi } from '../../api/users.api'
import { LoadQuery } from '../../components/LoadQuery'
import { UserTabs } from './components/UserTabs'

const User: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [currentTab, setCurrentTab] = useState<
        'profile' | 'fav' | 'submitted'
    >('profile')
    const {
        data,
        refetch,
        status,
        error,
    } = useQuery(getOtherUserInfoApi.queryKey, () =>
        getOtherUserInfoApi.query({ userId: id }),
    )

    return (
        <LoadQuery status={status} data={data!} refetch={refetch} error={error}>
            {(user) => (
                <UserTabs
                    id={id}
                    user={user}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
            )}
        </LoadQuery>
    )
}

export default User

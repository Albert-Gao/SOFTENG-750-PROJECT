import { AxiosResponse } from 'axios'

export interface QueryFunction<QueryParamsType = any, ResponseType = any> {
    query: (params: QueryParamsType) => Promise<AxiosResponse<ResponseType>>
    queryKey: string
}

export interface PaginationQuery<ItemType> {
    total: number
    limit: number
    skip: number
    data: ItemType[]
}

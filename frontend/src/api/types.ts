export interface QueryFunction<QueryParamsType = any, ResponseType = any> {
    query: (params: QueryParamsType) => Promise<ResponseType>
    queryKey: string
}

export interface PaginationQuery<ItemType> {
    total: number
    limit: number
    skip: number
    data: ItemType[]
}

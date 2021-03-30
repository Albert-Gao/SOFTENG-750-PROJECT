import { AxiosResponse } from 'axios'

export interface QueryFunction<QueryParamsType = any, ResponseType = any> {
    query: (params: QueryParamsType) => Promise<AxiosResponse<ResponseType>>
    queryKey: string
}

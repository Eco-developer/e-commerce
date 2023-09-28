export type requestParameters = {
    method?: string,
    data?: {
        [key : string]: any
    },
    endpoint: string,
    params?: string,
    succesAlert?: boolean,
    subresource?: string,
}

export type alertState = {
    severity?: string,
    open: boolean,
    message?: string
}
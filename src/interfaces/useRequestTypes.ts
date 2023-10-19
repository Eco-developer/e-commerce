import { AlertColor } from "@mui/material"

export type requestParameters = {
    method?: string,
    data?: {
        [key : string]: any
    },
    endpoint: string,
    params?: {
        [key : string]: string,
    },
    succesAlert?: boolean,
    subresource?: string,
    headers?: {
        [key : string]: string,
    },
}

export type alertState = {
    severity?: AlertColor,
    open: boolean,
    message?: string
}
export type inputsArray = {
    [key : string]: any
}[]

export type valuesState = {
    [key : string]: any
}

export type validators = {
    [key : string]: {
        [key : string]: {
            validate: (value:any, values: valuesState) => boolean,
            message: string,
        }
    }
}

export type errors = {
    [key : string]: {
        status: boolean,
        message: string
    }
}
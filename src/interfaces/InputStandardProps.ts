import { 
    ChangeEventHandler, 
    ReactNode 
} from "react";

export type InputStandardProps = {
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    gridItemZeroMinWidth?: boolean,
    id: string,
    labelText: string,
    name: string,
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    autoComplete?: string,
    helperMessage?: string,
    autoFocus?: boolean,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    endAdornment?: ReactNode,
    error: {
        status: boolean,
        message: string,
    },
    fullWidth?: boolean,
    placeholder? : string,
    readOnly?: boolean,
    required?: boolean,
    startAdornment?: ReactNode,
    type?: string,
    value: any,
    margin?: "none" | "dense",
}
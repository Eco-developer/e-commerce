import { ChangeEventHandler } from "react";

export type TextFieldProps = {
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    gridItemZeroMinWidth?: boolean,
    id: string,
    labelText: string,
    name: string,
    helperMessage?: string,
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    autoComplete?: string,
    autoFocus?: boolean,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    error: {
        status: boolean,
        message: string,
    },
    fullWidth?: boolean,
    placeholder? : string,
    required?: boolean,
    value: any,
    margin?: "none" | "dense",
    minRows?: string | number,
    maxRows?: string | number,
    rows?: string | number,
    size?: "small" | "medium"
}
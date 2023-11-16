import { ChangeEvent, ReactNode } from "react";

export type CheckboxInputProps = {
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    gridItemZeroMinWidth?: boolean,
    id: string,
    labelText?: string,
    helperMessage?: string,
    name: string,
    onChecked?: (e: ChangeEvent<HTMLInputElement>) => void,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    error: {
        status: boolean,
        message: string,
    },
    required?: boolean,
    checked?: boolean,
    size?: "small" | "medium",
    icon?: ReactNode,
    checkedIcon?: ReactNode,
}
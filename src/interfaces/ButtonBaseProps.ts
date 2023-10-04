import { ReactNode } from "react";

export type ButtonBaseProps = {
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    id: string,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    fullWidth?: boolean,
    size?: "small" | "medium" | "large",
    processing?: boolean,
    onClick?: () => void,
    variant?: "contained" | "text" | "outlined" | undefined,
    text: string,
    endIcon?: ReactNode,
    type?: "button" | "submit" | "reset",
    styleClass?: string,
}
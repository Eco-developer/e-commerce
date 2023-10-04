import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

export type option = {
    value: any,
    text: string,
}

export type SelectInputProps = {
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    gridItemZeroMinWidth?: boolean,
    id: string,
    labelText: string,
    helperMessage?: string,
    name: string,
    onSelect?: (event: SelectChangeEvent<any>, child: ReactNode) => void,
    autoComplete?: string,
    autoFocus?: boolean,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    error: {
        status: boolean,
        message: string,
    },
    readOnly?: boolean,
    required?: boolean,
    value: any,
    options?: option[],
    autoWidth?: boolean,
    defaultOpen?: boolean,
    multiple?: boolean,
    size?: "small" | "medium",
}

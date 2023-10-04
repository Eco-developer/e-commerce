import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";
import { 
    ButtonBaseProps, 
    alertState, 
    errors, 
    inputProps, 
    inputsArray, 
    valuesState
} from "./index";
import { SelectChangeEvent } from "@mui/material";

export type FormProps = {
    title?: string,
    subheader?: string,
    buttons?: ButtonBaseProps[],
    inputs: inputProps[],
    values: valuesState,
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onSelect?: (event: SelectChangeEvent<any>, child: ReactNode) => void,
    errors?: errors,
    handleSubmit: any,
    alert?: alertState,
    handleCloseAlert: () => void,
    styleClass?: string,
    link?: {
        sideText: string,
        to: string,
        text: string,
    },
}
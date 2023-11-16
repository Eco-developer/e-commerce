import { SelectChangeEvent } from "@mui/material";
import {
    ChangeEvent,
    ChangeEventHandler, 
    ReactNode 
} from "react";
import { 
    valuesState, 
    errors,
} from "@/interfaces";
import { inputProps } from "./inputProps";

export type InputConstructorProps = {
    values: valuesState;
    input: inputProps;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSelect?: (e: SelectChangeEvent<any>, child: ReactNode) => void;
    onChecked?: (e: ChangeEvent<HTMLInputElement>) => void,
    errors?: errors;
}
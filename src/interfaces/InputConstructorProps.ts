import { SelectChangeEvent } from "@mui/material";
import {
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
    onSelect?: (event: SelectChangeEvent<any>, child: ReactNode) => void;
    errors?: errors;
}
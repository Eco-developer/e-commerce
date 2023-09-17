import { SelectChangeEvent } from "@mui/material";
import {
    ChangeEventHandler, 
    ReactNode 
} from "react";
import { 
    valuesState, 
    errors,  
    InputStandardProps, 
    SelectInputProps, 
    TextFieldProps 
} from "@/interfaces";

export type InputConstructorProps = {
    inputType: string,
    values: valuesState;
    input: { inputType: string } & InputStandardProps & SelectInputProps & TextFieldProps;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSelect: (event: SelectChangeEvent<any>, child: ReactNode) => void;
    errors: errors;
}
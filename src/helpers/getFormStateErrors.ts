import { 
    validators, 
    valuesState 
} from "@/interfaces";

export const getFormStateErrors = (values: valuesState, validators: validators={}) => {
    let isderty: boolean = false;
    Object.entries(validators).some(([name, fieldValidator]) => {
        Object.entries(fieldValidator).some(([key, validator]) => {
            isderty = !validator.validate(values[name], values);
            return isderty;
        })
        return isderty;
    })
    return isderty;
};
import { 
    useCallback, 
    useState, 
    ChangeEvent,
    ReactNode, 
} from "react"
import {    
    formState,
    valuesState,
    validators, 
    errors,
    inputProps,
} from "@/interfaces";
import { SelectChangeEvent } from "@mui/material";
import { getFormStateErrors } from "@/helpers";

export const useForm = (inputs:inputProps[], initialState: valuesState, validators: validators={}) => {
    const [updatedInputs, setInputs] = useState<inputProps[]>(inputs);
    const [formState, setFormState] = useState<formState>({
        isDerty: getFormStateErrors(initialState, validators),
        values: initialState,
        errors: {}
    })

    const validateInputs = useCallback((name: string, value: any, values: valuesState): errors => {
        let temp: errors = {
            [name]: {
                status: false,
                message: "",
            },
        };
        if (validators[name]) {
            Object.keys(validators[name]).some((key: string) => {
                const status = !validators[name][key].validate(value, values);
                temp[name] = {
                    status,
                    message: validators[name][key].message,
                };
                return status;
            })
        }
        return temp;
    }, [validators]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target : { name, value } } = e;
        setFormState((prevState: formState) => {
            const error = validateInputs(name, value, prevState.values);
            return {
                isDerty: getFormStateErrors({
                    ...prevState.values,
                    [name]: value,
                }, validators),    
                values: {
                    ...prevState.values,
                    [name]: value,
                },
                errors: {
                    ...prevState.errors,
                    ...error,
                }    
            }
        })
    }, [setFormState, validateInputs, validators]);

    const onSelect: (event: SelectChangeEvent<any>, child: ReactNode) => void = useCallback((e: SelectChangeEvent<any>, child: ReactNode) => {
        const { target : { name, value } } = e;
        setFormState((prevState: formState) => {
            const error = validateInputs(name, value, prevState.values);
            return {
                isDerty: getFormStateErrors({
                    ...prevState.values,
                    [name]: value,
                }, validators),    
                values: {
                    ...prevState.values,
                    [name]: value,
                },
                errors: {
                    ...prevState.errors,
                    ...error,
                }    
            }
        })
    }, [setFormState, validateInputs, validators]);

    const resetFormValues = useCallback(() => {
        setFormState({
            isDerty: getFormStateErrors(initialState, validators),    
            values: initialState,
            errors: {}    
        })
    }, [initialState, setFormState, validators]);

    const setValue = useCallback((name: string, value: any) => {
        setFormState((prevState: formState) => {
            const error = validateInputs(name, value, prevState.values);
            return {
                isDerty: getFormStateErrors({
                    ...prevState.values,
                    [name]: value,
                }, validators),    
                values: {
                    ...prevState.values,
                    [name]: value,
                },
                errors: {
                    ...prevState.errors,
                    ...error,
                }    
            }
        })
    }, [setFormState, validateInputs, validators]);

    const clearErrors = useCallback(() => {
        setFormState((prevState: formState) => ({
            isDerty: prevState.isDerty,
            values: prevState.values,
            errors: {},
        }));
    }, [setFormState]);
    
    const modifyInputs = useCallback((inputsProps: { [key : string] : any }) => {
        setInputs((prevState) => prevState.map((input) => inputsProps[input.id] ? {...input, ...inputsProps[input.id]} : input));
    }, [setInputs]);

    const addInputs = useCallback((newIputs: inputProps[]) => {
        setInputs((prevState) => [...prevState, ...newIputs]);
    }, [setInputs]);

    return {
        isDerty: formState.isDerty,
        values: formState.values,
        errors: formState.errors,
        updatedInputs,
        onChange,
        onSelect,
        validateInputs,
        resetFormValues,
        clearErrors,
        setValue,
        modifyInputs,
        addInputs,
    }
}
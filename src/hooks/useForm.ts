import { 
    useCallback, 
    useState, 
    ChangeEvent,
    ReactNode, 
} from "react"
import {    
    valuesState,
    validators, 
    errors,
    inputProps,
} from "@/interfaces";
import { SelectChangeEvent } from "@mui/material";

export const useForm = (inputs:inputProps[], initialState: valuesState, validators: validators={}) => {
    const [updatedInputs, setInputs] = useState<inputProps[]>(inputs);
    const [values, setValues] = useState<valuesState>(initialState);
    const [errors, setErrors] = useState<errors>({});

    const validateInputs = useCallback((name: string, value: any, values: valuesState): void => {
        if (validators[name]) {
            Object.keys(validators[name]).some((key: string) => {
                const status = !validators[name][key].validate(value, values);
                setErrors((prevState: errors) => ({ 
                    ...prevState,
                    [name]: {
                        status,
                        message: validators[name][key].message,
                    }
                }))
                return status;
            })
        }
    }, [validators, setErrors]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target : { name, value } } = e;
        setValues((prevState: valuesState) => {
            validateInputs(name, value, prevState);
            return {
                ...prevState,
                [name]: value,
            }
        })
    }, [setValues, validateInputs]);

    const onSelect: (event: SelectChangeEvent<any>, child: ReactNode) => void = useCallback((e: SelectChangeEvent<any>, child: ReactNode) => {
        const { target : { name, value } } = e;
        setValues((prevState: valuesState) => {
            validateInputs(name, value, prevState);
            return {
                ...prevState,
                [name]: value,
            }
        })
    }, [setValues, validateInputs]);

    const resetFormValues = useCallback(() => {
        setValues(initialState);
        setErrors({});
    }, [initialState, setValues, setErrors]);

    const setValue = useCallback((name: string, value: any) => {
        setValues((prevState: valuesState) => {
            validateInputs(name, value, prevState);
            return {
                ...prevState,
                [name]: value,
            }
        })
    }, [setValues, validateInputs]);

    const clearErrors = useCallback(() => {
        setErrors({});
    }, []);
    
    const modifyInputs = useCallback((inputsProps: { [key : string] : any }) => {
        setInputs((prevState) => prevState.map((input) => inputsProps[input.id] ? {...input, ...inputsProps[input.id]} : input));
    }, [setInputs]);

    const addInputs = useCallback((newIputs: inputProps[]) => {
        setInputs((prevState) => [...prevState, ...newIputs]);
    }, []);

    const getFormErrorStatus = useCallback(() => {
        let isderty: boolean = false;
        Object.entries(validators).some(([name, fieldValidator]) => {
            Object.entries(fieldValidator).some(([key, validator]) => {
                isderty = !validator.validate(values[name], values);
                return isderty;
            })
            return isderty;
        })
        return isderty;
    }, [validators, values]);

    return {
        updatedInputs,
        values,
        validators,
        errors,
        onChange,
        onSelect,
        validateInputs,
        resetFormValues,
        clearErrors,
        setValue,
        modifyInputs,
        addInputs,
        getFormErrorStatus,
    }
}
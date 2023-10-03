import { 
    useCallback, 
    useState, 
    ChangeEvent, 
} from "react"
import {    
    inputsArray,
    valuesState,
    validators, 
    errors,
} from "@/interfaces";

export const useForm = (inputs:inputsArray, initialState: valuesState, validators: validators={}) => {
    const [updatedInputs, setInputs] = useState<inputsArray>(inputs);
    const [values, setValues] = useState<valuesState>(initialState);
    const [errors, setErrors] = useState<errors>({});

    const validateInputs = useCallback((name: string, value: any, values: valuesState): void => {
        if (validators[name]) {
            Object.keys(validators[name]).some((key: string) => {
                setErrors((prevState: errors) => ({ 
                    ...prevState,
                    [name]: {
                        status: !validators[name][key].validate(value, values),
                        message: validators[name][key].message,
                    }
                }))
                return !validators[name][key].validate(value, values);
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

    const addInputs = useCallback((newIputs: inputsArray) => {
        setInputs((prevState) => [...prevState, ...newIputs]);
    }, []);

    const getFormErrorStatus = useCallback((values: valuesState) => {
        return Object.keys(validators).some((name: string) => {
            return Object.keys(validators[name]).some((key: string) => {
                return !validators[name][key].validate(values[name], values);
            })
        })
    }, [validators]);

    return {
        updatedInputs,
        values,
        validators,
        errors,
        onChange,
        validateInputs,
        resetFormValues,
        clearErrors,
        setValue,
        modifyInputs,
        addInputs,
        getFormErrorStatus,
    }
}
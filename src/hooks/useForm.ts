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

export const useForm = (inputs:inputsArray, initialState: valuesState, initialValidators: validators) => {
    const [updatedInputs, setInputs] = useState<inputsArray>(inputs);
    const [values, setValues] = useState<valuesState>(initialState);
    const [validators, setValidators] = useState<validators>(initialValidators);
    const [errors, setErrors] = useState<errors>({});

    const validateInputs = useCallback((name: string, value: any, values: valuesState): void => {
        Object.keys(validators[name]).some((key: string) => {
            setErrors((prevState: errors) => ({ 
                ...prevState,
                [name]: {
                    status: validators[name][key].validate(value, values),
                    message: typeof validators[name][key].message === 'string' ? validators[name][key].message : validators[name][key].message(value, values)
                }
            }))
            return validators
        })
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
    }, [setValues, validateInputs])

    const resetFormValues = useCallback(() => {
        setValues(initialState);
        setErrors({});
    }, [initialState, setValues, setErrors])

    const setValue = useCallback((name: string, value: any) => {
        setValues((prevState: valuesState) => {
            validateInputs(name, value, prevState);
            return {
                ...prevState,
                [name]: value,
            }
        })
    }, [setValues, validateInputs])

    const clearErrors = () => {
        setErrors({});
    }
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
    }
}
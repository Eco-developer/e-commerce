'use client'
import { Form } from "@/components/Form/Form";
import { 
    useForm, 
    useRequest 
} from "@/hooks";
import { useRouter } from "next/navigation";
import { 
    inputs,
    validators,
} from "@/const/loginInputsAndValidators";
import { useState } from "react";
//import { endpoints } from "@/const/endpoints";  

//const { login } = endpoints;
 
export const LoginForm = () => {
    const initialState = {
        email: "",
        password: "",
    }
    const { push } = useRouter();
    const {
        updatedInputs,
        values,
        errors,
        getFormErrorStatus,
        onChange,
    } = useForm(inputs, initialState, validators);
    const {
        alert, 
        handleRequest,
        handleCloseAlert
    } = useRequest();
    const [processing, setProcessing] = useState<boolean>(false);

    const handleSubmit = async (e: HTMLFormElement) => {
        e.preventDefault();
        /*const response = await handleRequest({
            method: "POST",
            data: values,
            endpoint: login,
        })
        if (response?.token) {
            localStorage.setItem('token', response.token)
            push("/")
        }*/
        console.log(values)
        
    }
    const disabled = getFormErrorStatus(values);
    return (
        <Form
            title="Login"
            inputs={updatedInputs}
            values={values}
            onChange={onChange}
            errors={errors}
            handleSubmit={handleSubmit}
            alert={alert}
            handleCloseAlert={handleCloseAlert}
            buttons={[
                {
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    text: "LOGIN",
                    id: "login-btn",
                    type: "submit",
                    processing,
                    disabled
                }
            ]}
            link={{
                sideText: "Do not have an account? ",
                to: "/signup",
                text: "Create account"
            }}
        />
    )
}
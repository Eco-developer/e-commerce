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
        isDerty,
        onChange,
    } = useForm(inputs, initialState, validators);
    const {
        alert, 
        processing,
        handleRequest,
        handleCloseAlert,
    } = useRequest();

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
                    text: "LOGIN",
                    id: "login-btn",
                    type: "submit",
                    processing,
                    disabled: isDerty,
                },
                {
                    variant: "outlined",
                    text: "FORGET PASSWORD",
                    id: "forget-password-btn",
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
'use client'
import { Form } from "@/components/Form/Form";
import { 
    useForm, 
    useRequest 
} from "@/hooks";
import { 
    inputs,
    validators,
} from "@/const/signupInputsAndValidators";
//import { endpoints } from "@/const/endpoints";  

//const { signup } = endpoints;
 
export const SignupForm = () => {
    const initialState = {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    }
    const {
        updatedInputs,
        values,
        errors,
        onChange,
        getFormErrorStatus,
    } = useForm(inputs, initialState, validators);
    const {
        alert, 
        processing,
        handleRequest,
        handleCloseAlert
    } = useRequest();

    const disabled = getFormErrorStatus();

    const handleSubmit = async (e: HTMLFormElement) => {
        e.preventDefault();
       /* const response = await handleRequest({
            method: "POST",
            data: values,
            endpoint: signup,
        })
        if (response?.token) {
            setDialog(true);
        }*/
    }

    return (
        <Form
            title="Create account"
            subheader="The fields with * are required."
            inputs={updatedInputs}
            values={values}
            onChange={onChange}
            errors={errors}
            handleSubmit={handleSubmit}
            alert={alert}
            handleCloseAlert={handleCloseAlert}
            buttons={[
                {
                    text: "CREATE ACCOUNT",
                    id: "signup-btn",
                    type: "submit",
                    processing,
                    disabled
                }
            ]}
            link={{
                sideText: "Already have an account? ",
                to: "/login",
                text: "Sign in"
            }}
        />
    )
}
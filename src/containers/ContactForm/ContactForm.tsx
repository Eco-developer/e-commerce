"use client"
import { Form } from "@/components/Form/Form";
import { 
    useForm, 
    useRequest 
} from "@/hooks";
import styles from "./ContactForm.module.css";
import { 
    inputs, 
    validators 
} from "@/const/contactInputsAndValidators";

export const ContactForm = () => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }
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
        <div className={styles.contact__form__container}>
            <Form
                inputs={updatedInputs}
                values={values}
                onChange={onChange}
                errors={errors}
                handleSubmit={handleSubmit}
                alert={alert}
                handleCloseAlert={handleCloseAlert}
                buttons={[
                    {
                        text: "Send Message",
                        id: "send-btn",
                        type: "submit",
                        processing,
                        disabled: isDerty,
                    },
                ]}
            />
        </div>
    )
}
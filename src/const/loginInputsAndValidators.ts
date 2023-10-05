import { 
    INPUT_STANDARD,
    PASSWORD_INPUT,
} from "./inputTypes"

export const inputs = [
    {
        inputType: INPUT_STANDARD,
        name: "email",
        id: "email_input",
        placeholder: "Enter your email.",
        labelText: "Email",
    },
    {
        inputType: PASSWORD_INPUT,
        name: "password",
        id: "password_input",
        placeholder: "Enter your password.",
        labelText: "Password",
    }
]

export const validators = {
    email: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The email is required.",
        },
    },
    password: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The password is required.",
        },
    }
}
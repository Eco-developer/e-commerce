import { valuesState } from "@/interfaces";
import { 
    INPUT_STANDARD,
    PASSWORD_INPUT,
} from "./inputTypes"
import { 
    REGEX_EMAIL, 
    REGEX_PASSWORD 
} from "./regex";

export const inputs = [
    {
        inputType: INPUT_STANDARD,
        name: "name",
        id: "name_input",
        placeholder: "Enter your name.",
        labelText: "Name",
        required: true,
    },
    {
        inputType: INPUT_STANDARD,
        name: "lastname",
        id: "lastname_input",
        placeholder: "Enter your lastname.",
        labelText: "Lastname",
        required: true,
    },
    {
        inputType: INPUT_STANDARD,
        name: "email",
        id: "email_input",
        placeholder: "Enter an email.",
        labelText: "Email",
        required: true,
    },
    {
        inputType: INPUT_STANDARD,
        name: "phone",
        id: "phone_input",
        placeholder: "Enter your phone.",
        labelText: "Phone",
    },
    {
        inputType: PASSWORD_INPUT,
        name: "password",
        id: "password_input",
        placeholder: "Enter a password.",
        labelText: "Password",
        helperMessage: "The password must contain between 6 and 20 characters, at least one letter, and at least one number.",
        required: true,
    },
    {
        inputType: PASSWORD_INPUT,
        name: "password_confirmation",
        id: "password_confirmation_input",
        placeholder: "Enter a password.",
        labelText: "Repeat Password",
    }
]

export const validators = {
    name: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The name is required.",
        },
        maxLength: {
            validate: (value: any) => {
                return value.length <= 20;
            },
            message: "The name mustn't have more than 20 characters.",
        }
    },
    lastname: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The lastname is required.",
        },
        maxLength: {
            validate: (value: any) => {
                return value.length <= 20;
            },
            message: "The lastname mustn't have more than 20 characters.",
        }
    },
    email: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The email is required.",
        },
        pattern: {
            validate: (value: any) => {
                return REGEX_EMAIL.test(value);
            },
            message: "Invalid email format.",
        }
    },
    phone: {
        maxLength: {
            validate: (value: any) => {
                return value.length <= 15;
            },
            message: "The phone mustn't have more than 15 characters.",
        }
    },
    password: {
        require: {
            validate: (value: any) => {
                return !!value.length;
            },
            message: "The password is required.",
        },
        pattern: {
            validate: (value: any) => {
                return REGEX_PASSWORD.test(value);
            },
            message: "Invalid password format.",
        }
    },
    password_confirmation: {
        equal: {
            validate: (value: any, values: valuesState) => {
                return value === values.password;
            },
            message: "Both passwords must be the same.",
        }
    }
}
import { 
    INPUT_STANDARD,
    TEXT_FIELD_INPUT,
} from "./inputTypes"

export const inputs = [
    {
        inputType: INPUT_STANDARD,
        name: "name",
        id: "name_input",
        placeholder: "Your name.",
        labelText: "Name",
        lg: 6,
        xl: 6,
        required: true,
    },
    {
        inputType: INPUT_STANDARD,
        name: "phone",
        id: "phone_input",
        placeholder: "Your phone.",
        labelText: "Phone",
        lg: 6,
        xl: 6,
    },
    {
        inputType: INPUT_STANDARD,
        name: "email",
        id: "email_input",
        placeholder: "Your email.",
        labelText: "Email",
        type: "email",
        required: true,
    },
    {
        inputType: TEXT_FIELD_INPUT,
        name: "message",
        id: "message_input",
        placeholder: "Your message.",
        labelText: "Message",
        required: true,
    },
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
    email: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The email is required.",
        },
    },
    phone: {
        maxLength: {
            validate: (value: any) => {
                return value.length <= 15;
            },
            message: "The phone mustn't have more than 15 characters.",
        }
    },

    message: {
        require: {
            validate: (value: any) => {
                return !!value.length
            },
            message: "The message is required.",
        },
        maxLength: {
            validate: (value: any) => {
                return value.length <= 250;
            },
            message: "The message mustn't have more than 250 characters.",
        }
    }

}
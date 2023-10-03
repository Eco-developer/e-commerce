import { 
    renderHook, 
    act 
} from "@testing-library/react";
import { useForm } from "./useForm";
import { 
    inputs, 
    validators 
} from "@/const/signupInputsAndValidators";
import { INPUT_STANDARD } from "@/const/inputTypes";

const initialState = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
}

test("should test the onChange and setValue methods", () => {
    const { result } = renderHook(({inputsProp, initialStateProp, validatorsProp}) => useForm(inputsProp, initialStateProp, validatorsProp), {
        initialProps: {
            inputsProp: inputs,
            initialStateProp: initialState,
            validatorsProp: validators,
        }
    });

    expect(result.current.values.name).toEqual("");
    expect(result.current.values.lastname).toEqual("");
    expect(result.current.values.email).toEqual("");
    expect(result.current.values.phone).toEqual("");
    expect(result.current.values.password).toEqual("");
    expect(result.current.values.password_confirmation).toEqual("");
    expect(result.current.getFormErrorStatus(result.current.values)).toBe(true);

    act(() => {
        const event : any = { 
            target : { 
                name: "name", 
                value: "Jose",
            },
        }
        result.current.onChange(event)
    })

    act(() => {
        const event : any = { 
            target : { 
                name: "lastname", 
                value: "Quesada",
            },
        }
        result.current.onChange(event)
    })

    act(() => {
        const event : any = { 
            target : { 
                name: "email", 
                value: "jose@gmail.com",
            },
        }
        result.current.onChange(event)
    })

    act(() => {
        const event : any = { 
            target : { 
                name: "phone", 
                value: "04122120037",
            },
        }
        result.current.onChange(event)
    })

    act(() => {
        result.current.setValue("password", "123456Jm*")
    })

    act(() => {
        result.current.setValue("password_confirmation", "123456Jm*")
    })

    expect(result.current.values.name).toEqual("Jose");
    expect(result.current.values.lastname).toEqual("Quesada");
    expect(result.current.values.email).toEqual("jose@gmail.com");
    expect(result.current.values.phone).toEqual("04122120037");
    expect(result.current.values.password).toEqual("123456Jm*");
    expect(result.current.values.password_confirmation).toEqual("123456Jm*");
    expect(result.current.getFormErrorStatus(result.current.values)).toBe(false);

    act(() => {
        result.current.resetFormValues();
    })

    expect(result.current.values.name).toEqual("");
    expect(result.current.values.lastname).toEqual("");
    expect(result.current.values.email).toEqual("");
    expect(result.current.values.phone).toEqual("");
    expect(result.current.values.password).toEqual("");
    expect(result.current.values.password_confirmation).toEqual("");
    expect(result.current.getFormErrorStatus(result.current.values)).toBe(true);
})

test("should test if form has errors", () => {
    const { result } = renderHook(({inputsProp, initialStateProp, validatorsProp}) => useForm(inputsProp, initialStateProp, validatorsProp), {
        initialProps: {
            inputsProp: inputs,
            initialStateProp: initialState,
            validatorsProp: validators,
        }
    });

    expect(result.current.values.email).toEqual("");
    expect(result.current.values.password).toEqual("");
    expect(result.current.getFormErrorStatus(result.current.values)).toBe(true);

    act(() => {
        const event : any = { 
            target : { 
                name: "email", 
                value: "josegmailcom",
            },
        }
        result.current.onChange(event)
    })

    act(() => {
        result.current.setValue("password", "1234565")
    })

    expect(result.current.values.email).toEqual("josegmailcom");
    expect(result.current.errors.email.status).toBe(true);
    expect(result.current.errors.email.message).toEqual("Invalid email format.");
    expect(result.current.values.password).toEqual("1234565");
    expect(result.current.errors.password.status).toBe(true);
    expect(result.current.errors.password.message).toEqual("Invalid password format.");
    expect(result.current.getFormErrorStatus(result.current.values)).toBe(true);
})

test("should test addInputs and modifyInputs methods", () => {
    const { result } = renderHook(({inputsProp, initialStateProp, validatorsProp}) => useForm(inputsProp, initialStateProp, validatorsProp), {
        initialProps: {
            inputsProp: inputs,
            initialStateProp: initialState,
            validatorsProp: validators,
        }
    });

    expect(result.current.updatedInputs[0].placeholder).toEqual("Enter your name.");
    expect(result.current.updatedInputs.find((input: { [key : string] : any }) => input.id === "address_input")).toBe(undefined);

    act(() => {
        result.current.addInputs([
            {
                inputType: INPUT_STANDARD,
                name: "address",
                id: "address_input",
                placeholder: "Enter your address.",
                labelText: "Address",
            },
        ])
    })

    act(() => {
        result.current.modifyInputs({
            name_input: {
                placeholder: "Enter a name.",
            }
        })
    })

    expect(result.current.updatedInputs[0].placeholder).toEqual("Enter a name.");
    expect(result.current.updatedInputs.find((input: { [key : string] : any }) => input.id === "address_input")?.id).toEqual("address_input");
})
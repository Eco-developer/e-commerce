import { Form } from './Form'
import userEvent from '@testing-library/user-event'
import { render, renderHook, screen } from '@testing-library/react'
import { inputs, validators } from '@/const/loginInputsAndValidators'; 
import { useForm } from '@/hooks';

describe('Form', () => {
    test("Testing the Form component", async () => {
        const user = userEvent.setup();
        const { result } = renderHook(({inputsProp, initialStateProp, validatorsProp}) => useForm(inputsProp, initialStateProp, validatorsProp), {
            initialProps: {
                inputsProp: inputs,
                initialStateProp: {
                    email: "",
                    password: "",
                },
                validatorsProp: validators,
            }
        });
        
        const { rerender } = render(<Form
            title="Test Form"
            subheader="This is the test of form component"
            inputs={inputs}
            buttons={[
                {
                    text: "LOGIN",
                    id: "login-btn",
                    type: "submit",
                    disabled: result.current.isDerty,
                },
                {
                    variant: "outlined",
                    text: "FORGET PASSWORD",
                    id: "forget-password-btn",
                }
            ]}
            values={result.current.values}
            onChange={result.current.onChange}
            errors={result.current.errors}
            alert={{open: false}}
            link={{
                sideText: "Do not have an account? ",
                to: "/signup",
                text: "Create account"
            }}
        />)

        const button:any = screen.getByText("LOGIN");
        const emailInput:any = screen.getByLabelText("Email");
        const passwordInput:any = screen.getByLabelText("Password");

        expect(emailInput.value).toBe("");
        expect(passwordInput.value).toBe("");
        expect(button.disabled).toBe(true);
        
        await user.click(emailInput)
        await user.paste("jose@gmail.com");
        await user.click(passwordInput)
        await user.paste("Abc123456*");

        rerender(<Form
            title="Test Form"
            subheader="This is the test of form component"
            inputs={inputs}
            buttons={[
                {
                    text: "LOGIN",
                    id: "login-btn",
                    type: "submit",
                    disabled: result.current.isDerty,
                },
                {
                    variant: "outlined",
                    text: "FORGET PASSWORD",
                    id: "forget-password-btn",
                }
            ]}
            values={result.current.values}
            onChange={result.current.onChange}
            errors={result.current.errors}
            alert={{open: false}}
            link={{
                sideText: "Do not have an account? ",
                to: "/signup",
                text: "Create account"
            }}
        />)

        expect(emailInput.value).toBe("jose@gmail.com");
        expect(passwordInput.value).toBe("Abc123456*");
        expect(button.disabled).toBe(false);
    })
})
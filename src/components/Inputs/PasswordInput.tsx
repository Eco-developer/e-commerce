import { InputStandard } from "./InputStandard";
import { IconButton, InputAdornment } from "@mui/material";
import {
    Visibility,
    VisibilityOff,
}from '@mui/icons-material';
import { useCallback, useState } from "react";
import { PasswordInputProps } from "@/interfaces";

export const PasswordInput: React.FC<PasswordInputProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    gridItemZeroMinWidth,
    id,
    labelText,
    helperMessage,
    name,
    onChange,
    autoComplete,
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    placeholder,
    readOnly,
    required,
    value,
    margin,
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = useCallback(() => {
        setShowPassword((prevState) => !prevState);
    }, [setShowPassword]);
    return (
        <InputStandard
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            gridItemZeroMinWidth={gridItemZeroMinWidth}
            id={id}
            labelText={labelText}
            helperMessage={helperMessage}
            name={name}
            onChange={onChange}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            color={color}
            disabled={disabled}
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
            }
            error={error}
            fullWidth={fullWidth}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            type={showPassword ? "text" : "password"}
            value={value}
            margin={margin}
        />
    )

}
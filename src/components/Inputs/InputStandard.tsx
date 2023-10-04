import { 
    Grid,
    InputLabel,
    FormControl,
    FormHelperText,
    OutlinedInput,
} from "@mui/material";
import { InputStandardProps } from "@/interfaces";

export const InputStandard: React.FC<InputStandardProps> = ({
    xs=12,
    sm=12,
    md=12,
    lg=12,
    xl=12,
    gridItemZeroMinWidth=false,
    id,
    labelText,
    name,
    onChange,
    autoComplete,
    autoFocus=false,
    color="primary",
    disabled=false,
    endAdornment,
    error,
    fullWidth=true,
    helperMessage,
    placeholder,
    readOnly=false,
    required=false,
    startAdornment,
    type="text",
    value,
    margin="none",
}) => {
    return (
        <Grid 
            item={true}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            zeroMinWidth={gridItemZeroMinWidth}
        >
            <FormControl fullWidth>
                <InputLabel
                    htmlFor={id}
                    variant="outlined"
                >
                    {labelText}
                </InputLabel>
                <OutlinedInput
                    label={labelText}
                    id={id}
                    name={name}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    color={color}
                    disabled={disabled}
                    endAdornment={endAdornment}
                    error={error?.status}
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    required={required}
                    startAdornment={startAdornment}
                    type={type}
                    value={value}
                    margin={margin}
                />
                {helperMessage ?
                    (
                        <FormHelperText>
                            {helperMessage}
                        </FormHelperText>
                    )
                    : null
                }
                {error?.status ?
                    (
                        <FormHelperText error={true}>
                            {error.message}
                        </FormHelperText>
                    )
                : null}
            </FormControl>
        </Grid>
    )
}
import { 
    Input,
    Grid,
    InputLabel,
    FormControl,
    FormHelperText,
    OutlinedInput
} from "@mui/material";
import { InputStandardProps } from "@/interfaces";

export const InputStandard: React.FC<InputStandardProps> = ({
    xs='auto',
    sm='auto',
    md='auto',
    lg='auto',
    xl='auto',
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
    placeholder,
    readOnly=false,
    required=false,
    startAdornment,
    type="text",
    value,
    margin="none",
    notched=false
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
            <FormControl >
                <InputLabel id={id}>
                    {labelText}
                </InputLabel>
                <OutlinedInput
                    id={id}
                    name={name}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    color={color}
                    disabled={disabled}
                    endAdornment={endAdornment}
                    error={error.status}
                    fullWidth={fullWidth}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    required={required}
                    startAdornment={startAdornment}
                    type={type}
                    value={value}
                    margin={margin}
                    notched={notched}
                />
                {error.status ?
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
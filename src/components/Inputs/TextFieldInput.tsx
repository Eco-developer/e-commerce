import { 
    Grid,
    TextField,
} from "@mui/material";
import { TextFieldProps } from "@/interfaces";

export const TextFieldInput: React.FC<TextFieldProps> = ({
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
    error,
    helperMessage=null,
    fullWidth=true,
    placeholder,
    required=false,
    value,
    margin="none",
    minRows,
    maxRows,
    rows=3,
    size
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
            <TextField
                label={labelText}
                id={id}
                name={name}
                onChange={onChange}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                color={color}
                disabled={disabled}
                error={error?.status}
                placeholder={placeholder}
                required={required}
                value={value}
                helperText={error?.status ? error.message : helperMessage}
                fullWidth={fullWidth}
                type="text"
                margin={margin}
                multiline={true}
                minRows={minRows}
                maxRows={maxRows}
                rows={rows}
                size={size}
            />
        </Grid>
    )
}
import { 
    Grid,
    InputLabel,
    FormControl,
    FormHelperText,
    Select,
    MenuItem,
} from "@mui/material";
import { 
    SelectInputProps, 
    selectOption 
} from "@/interfaces";
import { v4 as uuid } from "uuid";

export const SelectInput: React.FC<SelectInputProps> = ({
    xs=12,
    sm=12,
    md=12,
    lg=12,
    xl=12,
    gridItemZeroMinWidth=false,
    id,
    labelText,
    name,
    onSelect,
    autoComplete,
    autoFocus=false,
    color="primary",
    disabled=false,
    helperMessage,
    error,
    readOnly=false,
    required=false,
    value,
    options=[],
    autoWidth=false,
    defaultOpen=false,
    multiple=false,
    size,
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
                <Select
                    label={labelText}
                    id={id}
                    name={name}
                    onChange={onSelect}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    color={color}
                    disabled={disabled}
                    error={error?.status}
                    readOnly={readOnly}
                    required={required}
                    value={value}
                    variant="outlined"
                    autoWidth={autoWidth}
                    defaultOpen={defaultOpen}
                    multiple={multiple}
                    size={size}
                >
                    {options.map((option: selectOption) => (
                        <MenuItem 
                            value={option.value}
                            key={uuid()}
                        >
                            {option.text}
                        </MenuItem>
                    ))}
                </Select>
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
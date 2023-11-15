import { 
    Grid,
    FormHelperText,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { CheckboxInputProps } from "@/interfaces"; 


export const CheckboxInput: React.FC<CheckboxInputProps> = ({
    xs=12,
    sm=12,
    md=12,
    lg=12,
    xl=12,
    gridItemZeroMinWidth=false,
    id,
    labelText,
    name,
    onChecked,
    color="primary",
    disabled=false,
    error,
    helperMessage,
    required=false,
    checked,
    size,
    icon,
    checkedIcon,
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
            <FormControlLabel
                label={labelText}
                control={(
                <>
                    <Checkbox
                        id={id}
                        name={name}
                        onChange={onChecked}
                        color={color}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        icon={icon}
                        checkedIcon={checkedIcon}
                        size={size}
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
                </>)}
                labelPlacement="end"
            />
        </Grid>
    )
}
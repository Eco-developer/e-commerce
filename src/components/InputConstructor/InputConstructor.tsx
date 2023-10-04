import { 
    InputStandard, 
    SelectInput,
    TextFieldInput,
    PasswordInput,
} from "../Inputs";
import { InputConstructorProps } from "@/interfaces";
import { 
    INPUT_STANDARD, 
    PASSWORD_INPUT, 
    SELECT_INPUT, 
    TEXT_FIELD_INPUT 
} from "@/const/inputTypes";

export const InputConstructor: React.FC<InputConstructorProps> = ({
    values,
    input,
    onChange,
    onSelect,
    errors={},
}) => {
    switch (input.inputType) {
        case INPUT_STANDARD: {
            return (
                <InputStandard
                    xs={input.xs}
                    sm={input.sm}
                    md={input.md}
                    lg={input.lg}
                    xl={input.xl}
                    gridItemZeroMinWidth={input.gridItemZeroMinWidth}
                    id={input.id}
                    labelText={input.labelText}
                    name={input.name}
                    helperMessage={input.helperMessage}
                    onChange={onChange}
                    autoComplete={input.autoComplete}
                    autoFocus={input.autoFocus}
                    color={input.color}
                    disabled={input.disabled}
                    endAdornment={input.endAdornment}
                    error={errors[input.name]}
                    fullWidth={input.fullWidth}
                    placeholder={input.placeholder}
                    readOnly={input.readOnly}
                    required={input.required}
                    startAdornment={input.startAdornment}
                    type={input.type}
                    value={values[input.name]}
                    margin={input.margin}
                />
            )
        }
        case PASSWORD_INPUT: {
            return (
                <PasswordInput
                    xs={input.xs}
                    sm={input.sm}
                    md={input.md}
                    lg={input.lg}
                    xl={input.xl}
                    gridItemZeroMinWidth={input.gridItemZeroMinWidth}
                    id={input.id}
                    helperMessage={input.helperMessage}
                    labelText={input.labelText}
                    name={input.name}
                    onChange={onChange}
                    autoComplete={input.autoComplete}
                    autoFocus={input.autoFocus}
                    color={input.color}
                    disabled={input.disabled}
                    error={errors[input.name]}
                    fullWidth={input.fullWidth}
                    placeholder={input.placeholder}
                    readOnly={input.readOnly}
                    required={input.required}
                    value={values[input.name]}
                    margin={input.margin}
                />
            )
        }
        case SELECT_INPUT: {
            return (
                <SelectInput
                    xs={input.xs}
                    sm={input.sm}
                    md={input.md}
                    lg={input.lg}
                    xl={input.xl}
                    gridItemZeroMinWidth={input.gridItemZeroMinWidth}
                    id={input.id}
                    labelText={input.labelText}
                    name={input.name}
                    helperMessage={input.helperMessage}
                    onSelect={onSelect}
                    autoComplete={input.autoComplete}
                    autoFocus={input.autoFocus}
                    color={input.color}
                    disabled={input.disabled}
                    error={errors[input.name]}
                    readOnly={input.readOnly}
                    required={input.required}
                    value={values[input.name]}
                    options={input.options}
                    autoWidth={input.autoWidth}
                    multiple={input.multiple}
                    size={input.size}
                />
            )
        }
        case TEXT_FIELD_INPUT: {
            return (
                <TextFieldInput
                    xs={input.xs}
                    sm={input.sm}
                    md={input.md}
                    lg={input.lg}
                    xl={input.xl}
                    gridItemZeroMinWidth={input.gridItemZeroMinWidth}
                    id={input.id}
                    labelText={input.labelText}
                    name={input.name}
                    helperMessage={input.helperMessage}
                    onChange={onChange}
                    autoComplete={input.autoComplete}
                    autoFocus={input.autoFocus}
                    color={input.color}
                    disabled={input.disabled}
                    error={errors[input.name]}
                    fullWidth={input.fullWidth}
                    placeholder={input.placeholder}
                    required={input.required}
                    value={values[input.name]}
                    margin={input.margin}
                    minRows={input.minRows}
                    maxRows={input.maxRows}
                    rows={input.rows}
                    size={input.size}
                />
            )
        }
        default:
            return null;
    }
}
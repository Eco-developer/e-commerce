import { 
    InputStandard, 
    SelectInput,
    TextFieldInput,
    PasswordInput,
    CheckboxInput,
} from "../Inputs";
import { InputConstructorProps } from "@/interfaces";
import { 
    CHECKBOX_INPUT,
    INPUT_STANDARD, 
    PASSWORD_INPUT, 
    RENDER, 
    SELECT_INPUT, 
    TEXT_FIELD_INPUT 
} from "@/const/inputTypes";

export const InputConstructor: React.FC<InputConstructorProps> = ({
    values,
    input,
    onChange,
    onSelect,
    onChecked,
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
        case CHECKBOX_INPUT: {
            return (
                <CheckboxInput
                    xs={input.xs}
                    sm={input.sm}
                    md={input.md}
                    lg={input.lg}
                    xl={input.xl}
                    gridItemZeroMinWidth={input.gridItemZeroMinWidth}
                    id={input.id}
                    labelText={input.labelText}
                    name={input.name}
                    onChecked={onChecked}
                    color={input.color}
                    disabled={input.disabled}
                    error={errors[input.name]}
                    helperMessage={input.helperMessage}
                    required={input.required}
                    checked={values[input.name]}
                    size={input.size}
                    icon={input.icon}
                    checkedIcon={input.checkedIcon}
                />
            )
        }
        case RENDER: {
            return input.render ? 
                input.render({ 
                    values,
                    onChange,
                    onSelect,
                    onChecked,
                    errors,
                })   : null
        }
        default:
            return null;
    }
}
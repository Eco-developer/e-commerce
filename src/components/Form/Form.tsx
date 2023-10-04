import { InputConstructor } from "../InputConstructor/InputConstructor";
import { CardLayout } from "../CardLayout/CardLayout";
import { 
    Alert,
    Grid, 
    Snackbar,
} from "@mui/material";
import { 
    FormProps, 
    inputProps 
} from "@/interfaces";

export const Form: React.FC<FormProps> = ({
    title,
    subheader,
    inputs=[],
    buttons,
    values,
    onChange,
    onSelect,
    errors,
    handleSubmit,
    alert,
    handleCloseAlert,
    styleClass,
    link
}) => (
    <>
        <Snackbar 
            open={alert?.open} 
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={handleCloseAlert}
        >
            <Alert severity={alert?.severity} onClose={handleCloseAlert}>
                {alert?.message}
            </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
            <CardLayout
                title={title}
                subheader={subheader}
                link={link}
                buttons={buttons}
                styleClass={styleClass}
            >
                <Grid
                    container={true}
                    spacing={2}
                >
                    {inputs.map((input: inputProps) => (
                        <InputConstructor
                            key={input.id}
                            values={values}
                            input={input}
                            onChange={onChange}
                            onSelect={onSelect}
                            errors={errors}
                        />
                    ))}
                </Grid>
            </CardLayout>
        </form>
    </>
)
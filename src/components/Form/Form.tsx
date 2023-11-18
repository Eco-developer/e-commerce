import { InputConstructor } from "../InputConstructor/InputConstructor";
import { 
    Alert,
    Grid, 
    Snackbar,
    Typography,
} from "@mui/material";
import { 
    FormProps, 
    inputProps 
} from "@/interfaces";
import { Buttons } from "../Buttons/Buttons";
import Link from "next/link";

export const Form: React.FC<FormProps> = ({
    title,
    subheader,
    inputs=[],
    buttons,
    values,
    onChange,
    onSelect,
    onChecked,
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
        <div className={styleClass}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container={true}
                    spacing={2}
                >
                    {title ?   
                        <Grid 
                            item={true}
                            xs={12}
                        >
                            <Typography
                                color="#000"
                                fontFamily="Barlow Condensed Regular"
                                fontSize="36px"
                                fontWeight="500"
                                lineHeight="30px"
                                letterSpacing="1.44px"
                            >
                                {title}
                            </Typography>
                        </Grid>
                    :null}
                    {subheader ?
                        <Grid 
                            item={true}
                            xs={12}
                        >
                            <Typography
                                color="#000"
                                fontFamily="Barlow Condensed Regular"
                                fontSize="16px"
                                fontWeight="400"
                                lineHeight="24px"
                                letterSpacing="1.44px"
                            >
                                {subheader}
                            </Typography>
                        </Grid>
                    : null}
                    {inputs.map((input: inputProps) => (
                        <InputConstructor
                            key={input.id}
                            values={values}
                            input={input}
                            onChange={onChange}
                            onSelect={onSelect}
                            onChecked={onChecked}
                            errors={errors}
                        />
                    ))}
                    <Grid 
                        item={true}
                        xs={12}
                    >
                        <Buttons
                            buttons={buttons}
                        />
                    </Grid>
                    {link ? 
                        <Grid 
                            item={true}
                            xs={12}
                        >
                            <p>
                                {link.sideText} <Link style={{color: "#DB4444"}} href={link.to}>{link.text}</Link>.
                            </p>
                        </Grid>
                    : null}
                </Grid>
            </form>
        </div>
    </>
)
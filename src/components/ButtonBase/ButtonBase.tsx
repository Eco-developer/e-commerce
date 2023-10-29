import { 
    Button, 
    CircularProgress, 
    Grid 
} from "@mui/material";
import { ButtonBaseProps } from "@/interfaces";

export const ButtonBase: React.FC<ButtonBaseProps> = ({
    xs=12,
    sm=12,
    md=12,
    lg=12,
    xl=12,
    id,
    disabled=false,
    processing=false,
    onClick,
    variant="contained",
    color="error",
    text,
    endIcon,
    fullWidth=true,
    size="medium",
    type="button",
    styleClass
}) => (
    <Grid
        item={true}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
    >
        <Button
            id={id}
            onClick={onClick}
            variant={variant}
            color={color}
            disabled={disabled || processing}
            endIcon={endIcon}
            fullWidth={fullWidth}
            size={size}
            type={type}
            className={styleClass}
        >
            {processing ?
                <CircularProgress
                    color="inherit"
                    size="2rem"
                />       
            : 
                text
            }
        </Button>
    </Grid>
)
import Link from "next/link";
import { Buttons } from "../Buttons/Buttons";
import { 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Stack 
} from "@mui/material";
import { CardLayoutProps } from "@/interfaces";
import styles from "./CardLayout.module.css";

export const CardLayout: React.FC<CardLayoutProps> = ({
    title,
    subheader,
    link=null,
    buttons=[],
    children,
    styleClass,
}) => (
    <Card className={`${styles.card__container} ${styleClass ? styleClass : ""}`}>
        <CardHeader
            title={title}
            subheader={subheader}
        />
        <CardContent>
            {children}
        </CardContent>
        <CardActions 
            sx={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Buttons
                buttons={buttons}
            />
            {link ? (
                <Stack padding={2}>
                    <p>
                        {link.sideText} <Link style={{color: "#DB4444"}} href={link.to}>{link.text}</Link>.
                    </p>
                </Stack>
                )
            : null}
        </CardActions>
    </Card>
)
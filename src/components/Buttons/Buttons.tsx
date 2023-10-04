import React from "react";
import { ButtonBase } from "../ButtonBase/ButtonBase";
import { Grid } from "@mui/material";
import { ButtonBaseProps } from "@/interfaces";

export const Buttons: React.FC<{buttons?: ButtonBaseProps[]}> = ({
    buttons=[],
}) => (
    buttons.length ?
        <Grid container={true} spacing={2} justifyContent="center">
            {buttons.map((button) => (
                <ButtonBase
                    key={button.id}
                    id={button.id}
                    xs={button.xs}
                    sm={button.sm}
                    md={button.md}
                    lg={button.lg}
                    xl={button.xl}
                    disabled={button.disabled}
                    processing={button.processing}
                    onClick={button.onClick}
                    variant={button.variant}
                    color={button.color}
                    text={button.text}
                    endIcon={button.endIcon}
                    fullWidth={button.fullWidth}
                    size={button.size}
                    type={button.type}
                    styleClass={button.styleClass}
                />
            ))}
        </Grid>
    : null
)
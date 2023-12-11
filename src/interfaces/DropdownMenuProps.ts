import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MouseEvent } from "react";

export type menuItem = {
    link: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    text: string;
    onClick?: undefined;
} | {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    text: string;
    onClick: () => void;
    link?: undefined;
}

export type DropdownMenuProps = {
    menuItems: (menuItem)[],
    renderButton: (props: {
        "aria-controls": string | undefined;
        "aria-haspopup": string;
        "aria-expanded": string | undefined;
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }) => JSX.Element,
}
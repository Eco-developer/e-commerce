import { ReactNode } from "react";
import { ButtonBaseProps } from "./ButtonBaseProps";

export type CardLayoutProps = {
    title?: string,
    subheader?: string,
    link?: {
        sideText: string,
        to: string,
        text: string,
    },
    buttons?: ButtonBaseProps[],
    styleClass?: string,
    children: ReactNode,
}
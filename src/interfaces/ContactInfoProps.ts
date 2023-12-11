import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type infoItem = {
    title: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    texts: string[];
}

export type ContactInfoProps = {
    infoItems: infoItem[]
}
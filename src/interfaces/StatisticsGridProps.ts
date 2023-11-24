import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type Statistic = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    metric: string;
    text: string;
}

export type StatisticsGridProps = {
    statistics?: Statistic[];
}
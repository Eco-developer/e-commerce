import { Typography } from "@mui/material";
import {
    Statistic,
    StatisticsGridProps
} from "@/interfaces";
import styles from "./StatisticsGrid.module.css";

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({statistics=[]}) => (
    <div className={styles.statistics__container}>
        {statistics.map((statistic: Statistic) => (
            <div    
                key={statistic.text}
                className={styles.statistics__item__container}    
            >
                <div className={styles.statistics_icon__container}  >
                    <statistic.Icon/>
                </div>
                <br/>
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    color="#000"
                    fontSize="30px" 
                    >
                    {statistic.metric}
                </Typography>
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    color="#000"
                    fontSize="16px" 
                    >
                    {statistic.text}
                </Typography>
            </div>
        ))}
    </div>
)
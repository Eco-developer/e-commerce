import { Typography } from "@mui/material";
import styles from "./CategoriesMenu.module.css";
import {
    ArrowForwardIos,
} from '@mui/icons-material';

export const CategoriesMenu: React.FC<any> = ({ stores }) => {
    return (
        <div className={styles.categories__content}>
            {stores.map((store: any) => (
                <div 
                    key={store.location_id} 
                    className={styles.categories__item}
                >
                    <div className={styles.categories__item__main}>
                        <Typography 
                            fontFamily="Barlow Condensed Regular" 
                            fontSize="15px" 
                            color="#4D5E80" 
                            textAlign="left"
                        >
                            {store.location_names[0]?.name}
                        </Typography>
                    </div>
                    <ArrowForwardIos/>
                </div>
            ))}
        </div>
    )
}
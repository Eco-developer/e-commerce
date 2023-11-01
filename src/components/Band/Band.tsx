import { Typography } from "@mui/material";
import styles from "./Band.module.css";

export const Band = () => (
 <div className={styles.band__container}>
    <Typography 
        fontFamily="Barlow Condensed Regular" 
        color="#FAFAFA"
        fontSize="15px" 
        textAlign="center"
        fontStyle="bold"
        textTransform="uppercase"
    >
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    </Typography>
 </div>   
)
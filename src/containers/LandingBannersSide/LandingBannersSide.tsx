import { Typography } from "@mui/material";
import styles from "./LandingBannersSide.module.css";

export const LandingBannersSide = () => (
    <div className={styles.content__side__column}>
        <div className={styles.banner}>
            <img
                src="/assets/watch_side.png"
                alt="banner_two"
                className={styles.banner__img}
            />
            <Typography
                fontFamily="Barlow Condensed Regular"
                fontSize="20px"
                color="#6B7A99"
                textAlign="center"
                lineHeight="20px"
                fontWeight="900"
            >
               The New Smart Watches
            </Typography>
        </div>
        <div className={styles.banner}>
            <img
                src="/assets/phone.png"
                alt="banner_two"
                className={styles.banner__img}
            />
            <Typography
                fontFamily="Barlow Condensed Regular"
                fontSize="20px"
                color="#6B7A99"
                textAlign="center"
                lineHeight="20px"
                fontWeight="900"
            >
               New Tablets Samsung
            </Typography>
        </div>
    </div>
);
import { Typography } from "@mui/material";
import styles from "./LandingBanners.module.css";
import Image from "next/image";

export const LandingBanners = () => (
    <>
        <div className={styles.content__main__rows}>
            <div className={styles.banner__one}>
                <div
                className={`${styles.banner__circle} ${styles.banner__circle__one}`}
                ></div>
                <div
                className={`${styles.banner__circle} ${styles.banner__circle__two}`}
                ></div>
                <div className={styles.banner__head}>
                    <div className={styles.banner__head__badge}>
                        <Typography
                            fontFamily="Barlow Condensed Regular"
                            fontSize="13px"
                            color="#FFF"
                            textAlign="center"
                            lineHeight="20px"
                            fontWeight="900px"
                        >
                        New Ipad
                        </Typography>
                    </div>
                </div>
                <div className={styles.banner__content}>
                    <div className={styles.banner__title}>
                        <Typography
                            fontFamily="Barlow Condensed Regular"
                            fontSize="24px"
                            color="#4D5E80"
                            textAlign="center"
                            lineHeight="30px"
                            fontWeight="700px"
                        >
                        The New Ipad
                        </Typography>
                    </div>
                    <img
                        src="/assets/new_ipad.png"
                        alt="banner_one"
                        className={styles.banner__one__img}
                    />
                </div>
            </div>
            
        </div>
    </>
);

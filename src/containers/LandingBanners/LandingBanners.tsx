import { Typography } from "@mui/material";
import styles from "./LandingBanners.module.css";

export const LandingBanners = () => (
    <div className={styles.content__main__container}>
        <div className={styles.content__main__rows}>
            <div className={`${styles.banner} ${styles.banner__one}`}>
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
                            fontWeight="900"
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
                            fontWeight="700"
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
            <div className={`${styles.banner} ${styles.banner__two}`}>
                <div className={styles.banner__two__content}>
                    <img
                        src="/assets/airpods.png"
                        alt="banner_two"
                        className={styles.banner__two__img}
                    />
                    <div className={styles.banner__two__text}>
                        <div className={styles.banner__head__badge}>
                            <Typography
                                fontFamily="Barlow Condensed Regular"
                                fontSize="13px"
                                color="#FFF"
                                textAlign="center"
                                lineHeight="20px"
                                fontWeight="900"
                            >
                                New 
                            </Typography>
                        </div>
                        <Typography
                            fontFamily="Barlow Condensed Regular"
                            fontSize="24px"
                            color="#FFF"
                            textAlign="center"
                            lineHeight="30px"
                            fontWeight="700"
                        >
                            AirPods Pro
                        </Typography>
                        <Typography
                            fontFamily="Barlow Condensed Regular"
                            fontSize="15px"
                            color="#FFF"
                            textAlign="center"
                            lineHeight="30px"
                            fontWeight="500"
                        >
                            Magic like you’ve never heard.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.content__main__rows}>
            <div className={`${styles.banner} ${styles.banner__two}`}>
                <div className={styles.banner__content}>
                    <Typography
                        fontFamily="Barlow Condensed Regular"
                        fontSize="24px"
                        color="#FFF"
                        textAlign="center"
                        lineHeight="30px"
                        fontWeight="700"
                    >
                        Google
                    </Typography>
                    <img
                        src="/assets/nest.png"
                        alt="banner_three"
                        className={styles.banner__three__img}
                    />
                    <Typography
                        fontFamily="Barlow Condensed Regular"
                        fontSize="15px"
                        color="#FFF"
                        textAlign="center"
                        lineHeight="30px"
                        fontWeight="500"
                    >
                        Compare Thermostats
                    </Typography>
                </div>
            </div>
            <div className={`${styles.banner} ${styles.banner__four}`}>
                <div className={styles.banner__content}>
                    <img
                        src="/assets/controls_logo.png"
                        alt="banner_four_logo"
                        className={styles.banner__four__logo}
                    />
                    <img
                        src="/assets/controls.png"
                        alt="banner_four"
                        className={styles.banner__four__img}
                    />
                    <Typography
                        fontFamily="Barlow Condensed Regular"
                        fontSize="15px"
                        color="#FFF"
                        textAlign="center"
                        lineHeight="30px"
                        fontWeight="500"
                    >
                        Google Stadia
                    </Typography>
                </div>
                <div
                    className={`${styles.banner__circle} ${styles.banner__four__circle}`}
                ></div>
            </div>
            <div className={`${styles.banner} ${styles.banner__two}`}>
                <div className={styles.banner__content}>
                    <img
                        src="/assets/watch.png"
                        alt="banner_five"
                        className={styles.banner__two__img}
                    />
                    <Typography
                        fontFamily="Barlow Condensed Regular"
                        fontSize="15px"
                        color="#FFF"
                        textAlign="center"
                        lineHeight="30px"
                        fontWeight="500"
                    >
                       Galaxy Watch
                    </Typography>
                </div>
                <div
                    className={styles.banner__background__text}
                >
                    <Typography
                        fontFamily="Barlow Condensed Regular"
                        fontSize="35px"
                        color="#FFF"
                        textAlign="center"
                        fontWeight="900"
                    >
                        SAMSUNG
                    </Typography>
                </div>
            </div>
        </div>
    </div>
);
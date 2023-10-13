import Image from "next/image";
import { Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { footerMenu } from "@/const/footerMenu";

export const Footer = () => (
    <footer className={styles.footer__container}>
        <div className={styles.footer__content}>
            <div className={styles.footer__logo__container}>
                <Image 
                    src="/assets/logo.jpg" 
                    alt="logo" 
                    width="60" 
                    height="60" 
                    className={styles.footer__logo__img}
                />
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    fontSize="30px" 
                    color="#4D5E80" 
                    textAlign="center"
                >
                    Tech Market
                </Typography>
            </div>
            {footerMenu.map((menu: string[], index: number) => (
                <div 
                    key={index}
                    className={styles.footer__menu__container}
                >
                    {menu.map((item: string)=> (
                        <p>
                            {item}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    </footer>
);
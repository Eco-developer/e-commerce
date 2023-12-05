import { Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { footerMenu } from "@/const/footerMenu";
import { Logo } from "../Logo/Logo";

export const Footer = () => (
    <footer className={styles.footer__container}>
        <div className={styles.footer__content}>
            <Logo color="#FFF"/>
            {footerMenu.map((menu: string[], index: number) => (
                <div 
                    key={index}
                    className={styles.footer__menu__container}
                >
                    {menu.map((item: string)=> (
                        <p key={item}>
                            {item}
                        </p>
                    ))}
                </div>
            ))}
        </div>
        <div className={styles.footer__author}>
            <Typography 
                fontFamily="Barlow Condensed Regular" 
                fontSize="15px" 
                color="#FFF" 
                textAlign="center"
                fontWeight="700"
                lineHeight="24px"
                letterSpacing="0.72px"
                >
                Developed by Ecodeveloper
            </Typography>
        
        </div>
    </footer>
);
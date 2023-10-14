import { Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { footerMenu } from "@/const/footerMenu";
import { Logo } from "../Logo/Logo";

export const Footer = () => (
    <footer className={styles.footer__container}>
        <div className={styles.footer__content}>
            <Logo/>
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
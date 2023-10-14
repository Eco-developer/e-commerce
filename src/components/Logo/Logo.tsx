import { Typography } from "@mui/material";
import styles from "./Logo.module.css";
import Link from "next/link";

export const Logo = () => (
    <div className={styles.logo__container}>
        <Link
            href="/"
        >
            <img 
                src="/assets/logo.jpg" 
                alt="logo_img" 
                className={styles.logo__img}
            />
            <Typography 
                fontFamily="Barlow Condensed Regular" 
                fontSize="30px" 
                color="#4D5E80" 
                textAlign="center"
                >
                Tech Market
            </Typography>
        </Link>
    </div>
)
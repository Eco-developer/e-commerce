import { Typography } from "@mui/material";
import styles from "./Logo.module.css";
import Link from "next/link";

export const Logo = () => (
    <div className={styles.logo__container}>
        <Link
            href="/"
        >
            <Typography 
                fontFamily="Barlow Condensed Regular" 
                fontSize="25px" 
                color="#000" 
                textAlign="center"
                fontWeight="700"
                lineHeight="24px"
                letterSpacing="0.72px"
                >
                Exclusive
            </Typography>
        </Link>
    </div>
)
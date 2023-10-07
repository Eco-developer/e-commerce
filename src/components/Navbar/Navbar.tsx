import Image from "next/image";
import { Typography } from "@mui/material";
import {
   Person,
   ShoppingCart,
}from '@mui/icons-material';
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar__container}>
            <div className={styles.navbar__logo__container}>
                <Image src="/assets/logo.jpg" alt="logo" width="50" height="50" className={styles.navbar__logo__img}/>
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    fontSize="25px" 
                    color="#4D5E80" 
                    textAlign="center"
                >
                    Tech Market
                </Typography>
            </div>
            <div className={styles.navbar__icons__container}>
                <div className={styles.navbar__icon__container}>
                    <Person/>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        fontSize="20px" 
                        color="#4D5E80" 
                        textAlign="center"
                    >
                        Account
                    </Typography>
                </div>
                <div className={styles.navbar__icon__container}>
                    <ShoppingCart/>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        fontSize="20px" 
                        color="#4D5E80" 
                        textAlign="center"
                    >
                        Cart
                    </Typography>
                </div>
            </div>
        </nav>
    )
}
import { Logo } from "../Logo/Logo";
import { Typography } from "@mui/material";
import {
   Person,
   ShoppingCart,
   Logout
}from '@mui/icons-material';
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar__container}>
            <Logo/>
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
                <div className={styles.navbar__icon__container}>
                    <Logout/>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        fontSize="20px" 
                        color="#4D5E80" 
                        textAlign="center"
                    >
                        Logout
                    </Typography>
                </div>
            </div>
        </nav>
    )
}
"use client"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { Logo } from "../Logo/Logo";
import { Tooltip } from "@mui/material";
import {
   ShoppingCart,
   AccountCircle,
   FavoriteBorder,
   PersonOutline,
   InventoryOutlined,
   Logout
}from '@mui/icons-material';
import { 
    useCallback, 
    useMemo 
} from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import { NavMenu } from "../NavMenu/NavMenu";

const navMenuLinks = [
    {
        text: "Home",
        to: "/",
    },
    {
        text: "Contact",
        to: "/contact",
    },
    {
        text: "About",
        to: "/about",
    },
]

export const Navbar = () => {
    const { push } = useRouter();
    const handleLogout = useCallback(() => {
        push("/login")
    }, [push])
    const menuItems = useMemo(() => {
        return [
            {
                link: '/account',
                Icon: PersonOutline,
                text: "Manage My Account"
            },
            {
                link: '/orders',
                Icon: InventoryOutlined,
                text: "My Orders"
            },
            {
                Icon: Logout,
                text: "Logout",
                onClick: handleLogout
            },
        ]
    }, [handleLogout])
    return (
        <nav className={styles.navbar__container}>
            <Logo/>
            <NavMenu navMenuLinks={navMenuLinks}/>
            <div className={styles.navbar__icons__container}>
                <div className={styles.navbar__icon__container}>
                    <Tooltip title="Wish list" placement="top" arrow={true}>
                        <FavoriteBorder/>
                    </Tooltip>
                </div>
                <div className={styles.navbar__icon__container}>
                    <Tooltip title="Cart" placement="top" arrow={true}>
                        <ShoppingCart/>
                    </Tooltip>
                </div>
                <div className={styles.navbar__icon__container}>
                    <DropdownMenu 
                        menuItems={menuItems}
                        renderButton={(props:any) => (
                            <Tooltip {...props} title="Account" placement="top" arrow={true}>
                                <AccountCircle/>
                            </Tooltip>
                        )}
                    />
                </div>
            </div>
        </nav>
    )
}
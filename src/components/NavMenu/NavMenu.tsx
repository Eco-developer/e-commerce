import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import styles from "./NavMenu.module.css";
import { 
    NavMenuProps,
    navMenuItem,
} from "@/interfaces";

export const NavMenu: React.FC<NavMenuProps> = ({navMenuLinks=[]}) => {
    const pathname = usePathname();
    const [checked, setChecked] = useState<boolean>(false);
    const onChange = () => {
        setChecked((prevState: boolean) => !prevState);
    }
    return (
        navMenuLinks.length ?
        <div className={styles.navmenu__container}>
            <div className={styles.navmenu__content}>
                <input
                    type="checkbox" 
                    name="" 
                    checked={checked} 
                    id="" 
                    onChange={onChange}
                />
                <div className={styles.hamburger__lines}>
                    <span className={`${styles.line} ${styles.hamburger__line__one}`}></span>
                    <span className={`${styles.line} ${styles.hamburger__line__two}`}></span>
                    <span className={`${styles.line} ${styles.hamburger__line__three}`}></span>
                </div>
                <ul className={styles.menu__items}>
                    {navMenuLinks.map((navMenuItem: navMenuItem) => (
                        <li key={navMenuItem.text}>
                            <Link 
                                href={navMenuItem.to} 
                                className={`${pathname === navMenuItem.to ? styles.active__item : ""}`} 
                                onClick={onChange}
                            >
                                {navMenuItem.text}
                            </Link>                            
                        </li>
                    ))}
                </ul>
            </div>
        </div> : null
    )
}
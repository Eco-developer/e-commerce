import { Typography } from "@mui/material";
import styles from "./CategoriesMenu.module.css";
import {
    ShoppingCart,
    ArrowForwardIos,
} from '@mui/icons-material';

const categories = [
    {
        text: "Equipment",
        Icon: ShoppingCart,
    },
    {
        text: "Controls",
        Icon: ShoppingCart,
    },
    {
        text: "Audio",
        Icon: ShoppingCart,
    },
    {
        text: "Tablets",
        Icon: ShoppingCart,
    },
]

export const CategoriesMenu = () => {
    return (
        <aside className={styles.categories__container}>
            <div className={styles.categories__content}>
                {categories.map((categorie: {text: string, Icon: any}) => (
                    <div 
                        key={categorie.text} 
                        className={styles.categories__item}
                    >
                        <div className={styles.categories__item__main}>
                            <categorie.Icon/>
                            <Typography 
                                fontFamily="Barlow Condensed Regular" 
                                fontSize="15px" 
                                color="#4D5E80" 
                                textAlign="center"
                            >
                                {categorie.text}
                            </Typography>
                        </div>
                        <ArrowForwardIos/>
                    </div>
                ))}
            </div>
        </aside>
    )
}
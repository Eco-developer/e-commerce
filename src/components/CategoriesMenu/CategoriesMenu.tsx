"use client"
import { Typography } from "@mui/material";
import {
    ArrowForwardIos,
    ArrowBackIos
} from '@mui/icons-material';
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./CategoriesMenu.module.css";

export const CategoriesMenu: React.FC<any> = ({ 
    stores,
    categories,
}) => {
    const [storeId, setStoreId] = useState<string | null>(null);
    const { push } = useRouter();
    const handleBackStore = () => {
        setStoreId(null);
    }
    return (
        <div className={styles.categories__container}>
            <div className={styles.stores__container}>
                <div className={styles.stores__title}>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        fontSize="25px" 
                        color="#4d5e80" 
                        textAlign="left"
                        fontStyle="bold"
                        textTransform="uppercase"
                    >
                        Stores
                    </Typography>
                </div>
                <div className={styles.stores__content}>
                    {stores.map((store: any) => {
                         const handleClickStore = () => {
                            setStoreId(store.location_id)
                        }
                        return (
                            <div 
                                key={store.location_id} 
                                className={styles.stores__item}
                                onClick={handleClickStore}
                            >
                                <div className={styles.stores__item__main}>
                                    <Typography 
                                        fontFamily="Barlow Condensed Regular" 
                                        fontSize="17px" 
                                        color="#4D5E80" 
                                        textAlign="left"
                                    >
                                        {store.location_names[0]?.name}
                                    </Typography>
                                </div>
                                <ArrowForwardIos/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${styles.categories__main} ${storeId ? styles.categories__main__active : ""}`}>
                <div 
                    className={styles.categories__title} 
                    onClick={handleBackStore}
                >
                    <ArrowBackIos/>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        fontSize="25px" 
                        color="#4d5e80" 
                        textAlign="left"
                        fontStyle="bold"
                        textTransform="uppercase"
                    >
                        Categories
                    </Typography>
                </div>
                <div className={styles.stores__content}>
                    {categories.map((category: any) => {
                        const categorieId = category.actions[0]?.target?.split("=")[1]
                        const handleClickCategories = () => {
                            push(`/products?storeId=${storeId}&categorieId=${categorieId}`)
                        }
                        return (
                            <div 
                                key={category.tracking_id} 
                                className={styles.stores__item}
                                onClick={handleClickCategories}
                            >
                                <div className={styles.stores__item__main}>
                                    <Typography 
                                        fontFamily="Barlow Condensed Regular" 
                                        fontSize="17px" 
                                        color="#4D5E80" 
                                        textAlign="left"
                                    >
                                        {category.name}
                                    </Typography>
                                </div>
                                <ArrowForwardIos/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
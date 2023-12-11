
import { Typography } from '@mui/material';
import styles from "./ContactInfo.module.css";
import {
    infoItem,
    ContactInfoProps,
} from "@/interfaces"

export const ContactInfo: React.FC<ContactInfoProps> = ({infoItems=[]}) => (
    <div className={styles.contact__info__container}>
        {infoItems.map((infoItem:infoItem) => (
            <div 
                key={infoItem.title}
                className={styles.contact__info__item}
            >
                <div className={styles.info__item__header}>
                    <div className={styles.info__item__icon}>
                        <infoItem.Icon/>
                    </div>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        color="#000"
                        fontSize="17px" 
                        fontStyle="bold"
                    >
                        {infoItem.title}
                    </Typography>
                </div>
                <div className={styles.info__item__text}>
                    {infoItem.texts.map((text:string) => (
                        <Typography
                            key={text}
                            fontFamily="Barlow Condensed Regular" 
                            color="#000"
                            fontSize="14px" 
                        >
                            {text}
                        </Typography>
                    ))}
                </div>
            </div>
        ))}
    </div>
)
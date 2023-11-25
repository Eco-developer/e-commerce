import { Typography } from "@mui/material";
import styles from "./ServicesGrid.module.css";
import { 
    ServicesGridProps, 
    Service, 
} from "@/interfaces";

export const ServicesGrid: React.FC<ServicesGridProps> = ({services=[]}) => (
    <div className={styles.services__container}>
        {services.map((service: Service) => (
            <div    
                key={service.text}
                className={styles.services__item__container}    
            >
                <div className={styles.services_icon__container}  >
                    <service.Icon/>
                </div>
                <br/>
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    color="#000"
                    fontSize="20px" 
                    fontWeight="bold"
                    textAlign="center"
                >
                    {service.title}
                </Typography>
                <Typography 
                    fontFamily="Barlow Condensed Regular" 
                    color="#000"
                    fontSize="16px"
                    textAlign="center" 
                >
                    {service.text}
                </Typography>
            </div>
        ))}
    </div>
)
import { Typography } from "@mui/material";
import { 
    Instagram, 
    LinkedIn, 
    Twitter 
} from "@mui/icons-material";
import styles from "./TeamGrid.module.css";
import { 
    TeamGridProps, 
    Member, 
} from "@/interfaces";

export const TeamGrid: React.FC<TeamGridProps> = ({team=[]}) => (
    <div className={styles.team__container}>
        {team.map((member: Member) => (
            <div    
                key={member.name}
                className={styles.member__container}    
            >
                <div className={styles.member__img__container}>
                    <img 
                        src={`/assets/${member.img}`} 
                        alt={member.name} 
                        className={styles.member__img}
                    />
                </div>
                <div className={styles.member__content}>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        color="#000"
                        fontSize="30px" 
                        >
                        {member.name}
                    </Typography>
                    <Typography 
                        fontFamily="Barlow Condensed Regular" 
                        color="#000"
                        fontSize="16px" 
                        >
                        {member.position}
                    </Typography>
                    <div className={styles.member__icons__container}>
                        <Twitter/>
                        <Instagram/>
                        <LinkedIn/>
                    </div>
                </div>
            </div>
        ))}
    </div>
)
import { StatisticsGrid } from "@/components/StatisticsGrid/StatisticsGrid"
import { Typography } from "@mui/material"
import styles from "./page.module.css"
import { statistics } from "@/const/statistics"
import { TeamGrid } from "@/components/TeamGrid/TeamGrid"
import { team } from "@/const/team"
import { ServicesGrid } from "@/components/ServicesGrid/ServicesGrid"
import { services } from "@/const/services"

export default function About() {
    return (
      <section className={styles.about__container}>
        <div className={styles.about__head__container}>
          <div className={styles.about__head__text}>
            <Typography 
              fontFamily="Barlow Condensed Regular" 
              color="#000"
              fontSize="50px" 
              fontStyle="bold"
            >
              Our Story
            </Typography>
            <br/>
            <Typography 
              fontFamily="Barlow Condensed Regular" 
              color="#000"
              fontSize="16px" 
              textTransform="uppercase"
            >
              Launced in 2023, Exclusive is South America’s premier online shopping makterplace with an active presense in Venezuela. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </Typography>
            <br/>
            <Typography 
              fontFamily="Barlow Condensed Regular" 
              color="#000"
              fontSize="16px" 
              textTransform="uppercase"
            >
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </Typography>
          </div>
          <div className={styles.about__head__img}>
            <img
              src="/assets/aboutmainimage.jpg"
              alt="about_main_image"
            />
          </div>
        </div>
        <StatisticsGrid statistics={statistics}/>
        <TeamGrid team={team}/>
        <ServicesGrid services={services}/>
      </section>
    )
}
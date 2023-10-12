import { Navbar } from '@/components/Navbar/Navbar'
import { CategoriesMenu } from '@/components/CategoriesMenu/CategoriesMenu'
import { LandingBanners } from '@/containers/LandingBanners/LandingBanners'
import { Typography } from '@mui/material'
import styles from './page.module.css'
import Image from 'next/image'
import { LandingBannersSide } from '@/containers/LandingBannersSide/LandingBannersSide'

export default function Home() {
  return (
    <section className={styles.home__container}>
      <Navbar/>
      <section className={styles.content__container}>
        <aside className={styles.content__side__container}>
          <CategoriesMenu/>
          <LandingBannersSide/>
        </aside>
        <section className={styles.content__main__container}>
          <div className={styles.content__main__head}>
            <Image 
              src="/assets/logo.jpg" 
              alt="logo" 
              width="60" 
              height="60" 
              className={styles.head__logo__img}
            />
            <Typography 
                fontFamily="Barlow Condensed Regular" 
                fontSize="30px" 
                color="#4D5E80" 
                textAlign="center"
            >
                Tech Market
            </Typography>
          </div>
          <LandingBanners/>
        </section>
      </section>
      <footer className={styles.footer__container}>
        footer
      </footer>
    </section>
  )
}

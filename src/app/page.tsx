import { Navbar } from '@/components/Navbar/Navbar'
import { CategoriesMenu } from '@/components/CategoriesMenu/CategoriesMenu'
import { LandingBanners } from '@/containers/LandingBanners/LandingBanners'
import { LandingBannersSide } from '@/containers/LandingBannersSide/LandingBannersSide'
import { Footer } from '@/components/Footer/Footer'
import styles from './page.module.css'

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
          <LandingBanners/>
        </section>
      </section>
      <Footer/>
    </section>
  )
}

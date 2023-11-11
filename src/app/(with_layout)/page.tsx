import { CategoriesMenu } from '@/components/CategoriesMenu/CategoriesMenu'
import { LandingBanners } from '@/containers/LandingBanners/LandingBanners'
import styles from './page.module.css'
import { API_TARGET } from '@/const/baseUrl'

const getData = async () => {
  const urlStores = `${API_TARGET}/stores/list?zipcode=10009`;
  const urlCategories = `${API_TARGET}/categories/v2/list`;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd8b720c181msha82802376d11345p173d87jsn7d0c4fae6683',
    'X-RapidAPI-Host': 'target1.p.rapidapi.com'
  }
  };
  const responses = await Promise.all([fetch(urlStores, options), fetch(urlCategories, options)]);
 
  if (!responses[0].ok) {
    throw new Error('Failed to fetch data.');
  }
  const [stores, categories] = await Promise.all(responses.map((response) => response.json()));
  return {
    stores, 
    categories,
  }
}

export default async function Home() {
  const {
    stores, 
    categories,
  } = await getData();
  return (
    <section className={styles.content__container}>
      <section className={styles.content__side__container}>
        { stores.length ?
          <CategoriesMenu 
            stores={stores[0].locations}
            categories={categories.slots["1100"]?.content?.taxonomy_nodes} 
          />
        : null  } 
      </section>
      <section className={styles.content__main__container}>
        <LandingBanners/>
      </section>
    </section>
  )
}

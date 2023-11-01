import { Band } from '@/components/Band/Band'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import styles from "./page.module.css"
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'Exclusive app store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">    
          <section className={styles.home__container}>
            <Band/>
            <Navbar/>
              {children}
            <Footer/>
          </section>
        </main>
      </body>
    </html>
  )
}

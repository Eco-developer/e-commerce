import { Inter } from 'next/font/google';
import styles from "./layout.module.css";
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={styles.auth__container}>
                    <span className={styles.sideimage__container}>
                        <img 
                            src="/assets/authsideimage.jpg" 
                            alt="sideimage" 
                            className={styles.sideimage}
                        />
                    </span>
                    <span className={styles.auth__content}>
                        {children}
                    </span>
                </main>
            </body>
        </html> 
    )
  }
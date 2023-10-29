import styles from "./layout.module.css";

export default function AuthLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
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
    )
  }
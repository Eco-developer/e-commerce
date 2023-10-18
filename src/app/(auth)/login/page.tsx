import styles from "./page.module.css"
import { LoginForm } from "@/containers/LoginForm/LoginForm";

export default function SignIn() {
  return (
    <div className={styles.login_container}>
      <LoginForm/>
    </div>
  )
}

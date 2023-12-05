import { ContactInfo } from "@/containers/ContactInfo/ContactInfo";
import { ContactForm } from "@/containers/ContactForm/ContactForm";
import { infoItems } from "@/const/infoItems";
import styles from "./page.module.css";

export default function Contact() {
    return (
      <section className={styles.contact__container}>
        <ContactInfo infoItems={infoItems}/> 
        <ContactForm/>
      </section>
    )
}
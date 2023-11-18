import { ContactInfo } from "@/containers/ContactInfo/ContactInfo";
import { ContactForm } from "@/containers/ContactForm/ContactForm";
import styles from "./page.module.css";
import { infoItems } from "@/const/infoItems";

export default function Contact() {
    return (
      <section className={styles.contact__container}>
        <ContactInfo infoItems={infoItems}/> 
        <ContactForm/>
      </section>
    )
}
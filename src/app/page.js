import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
import FAQ from "./_components/faq";
export default function Home() {
  return (
    <main className={styles.main}>
      <Globalreach />
      <Aboutus />
      <FAQ />
    </main>
  );
}

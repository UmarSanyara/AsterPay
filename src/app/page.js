import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
export default function Home() {
  return (
    <main className={styles.main}>
      <Globalreach />
      <Aboutus />
    </main>
  );
}

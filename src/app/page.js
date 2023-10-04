import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
import FAQ from "./_components/faq";
import Sendmoney from "./_components/sendmoney";
import Blogs from "./_components/blogs";
export default function Home() {
  return (
    <main className={styles.main}>
      <Globalreach />
      <Sendmoney />
      <Aboutus />
      <Blogs />
      <FAQ />
    </main>
  );
}

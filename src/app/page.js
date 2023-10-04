import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
import FAQ from "./_components/faq";
import Sendmoney from "./_components/sendmoney";
import Blogs from "./_components/blogs";
import NavBar from "./_components/NavBar";
import WelcomePage from "./_components/WelcomePage";
function Page() {
  return (
    <main className={styles.main}>
      <NavBar />
      <WelcomePage />
      <Globalreach />
      <Sendmoney />
      <Aboutus />
      <Blogs />
      <FAQ />
    </main>
  );
}

export default Page;

import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Aboutus from "./_components/aboutus";
import FAQ from "./_components/faq";
import Sendmoney from "./_components/sendmoney";
import Blogs from "./_components/blogs";
import NavBar from "./_components/NavBar";
import WelcomePage from "./_components/WelcomePage";
import Process from "./_components/process";
import Help from "./_components/help";
import Security from "./_components/security";
function Page() {
  return (
    <main className={styles.main}>
      <NavBar />
      <WelcomePage />
      <Globalreach />
      <Sendmoney />
      <Process />
      <Security />
      <Help />
      <Aboutus />
      <Blogs />
      <FAQ />
    </main>
  );
}

export default Page;

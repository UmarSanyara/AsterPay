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
import MiddleBar from "./_components/MiddleBar";
import WhyPage from "./_components/WhyPage";
import ImportantQuestions from "./_components/important";
function Page() {
  return (
    <main className={styles.main}>
      <NavBar />
      <WelcomePage />
      <MiddleBar />
      <WhyPage />
      <Globalreach />
      <Sendmoney />
      <Process />
      <ImportantQuestions />
      <Security />
      <Help />
      <Aboutus />
      <Blogs />
      <FAQ />
    </main>
  );
}

export default Page;

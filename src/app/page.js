import Image from "next/image";
import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
import Sendmoney from "./_components/sendmoney";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Globalreach /> */}
      <Sendmoney/>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Globalreach from "./_components/globalreach";
export default function Home() {
  return (
    <main className={styles.main}>
      <Globalreach />
    </main>
  );
}

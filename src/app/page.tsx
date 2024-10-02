import styles from './page.module.css';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "vosita",
  description: "description test",
};
export default function Home() {
  return (
    <div className={styles.buttonContainer}>
      <a href="https://vosita.com" target='_blank'>
        <button className={styles.vositaButton}>Go To Vosita</button>
      </a>
    </div>
  );
}

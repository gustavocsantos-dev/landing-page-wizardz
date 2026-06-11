import Image from "next/image";
import styles from "./Footer.module.css";

export default function FooterPreview() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerSection}>
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and 25% increase in
          sales.
        </p>

        <div className={styles.learnMore}>
          <span>Learn more</span>
          <Image src="/green-arrow.png" alt="arrow" width={60} height={40} />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.footerSection}>
        <p>
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </p>

        <div className={styles.learnMore}>
          <span>Learn more</span>
          <Image src="/green-arrow.png" alt="arrow" width={60} height={40} />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.footerSection}>
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </p>

        <div className={styles.learnMore}>
          <span>Learn more</span>
          <Image src="/green-arrow.png" alt="arrow" width={60} height={40} />
        </div>
      </div>
    </section>
  );
}
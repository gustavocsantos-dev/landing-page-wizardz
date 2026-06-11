import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <>
      {/* HEADER */}
      <section className={styles.subTitle}>
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </section>

      {/* GRID */}
      <section className={styles.grid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.text}>
            <h3>Search engine optimization</h3>
            <div className={styles.learnMore}>
              <Image className={styles.arrow} src="/black-arrow.png" alt="arrow" width={85} height={50} />
              <span>Learn more</span>
            </div>
          </div>

          <Image
            src="/search.png"
            alt="seo"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Card 2 (dark) */}
        <div className={styles.cardDark}>
          <div className={styles.text}>
            <h3>Pay per click advertising</h3>
            <div className={styles.learnMore}>
              <Image className={styles.arrow} src="/white-arrow.png" alt="arrow" width={85} height={50} />
              <span>Learn more</span>
            </div>
          </div>

          <Image
            src="/pay.png"
            alt="ppc"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Card 3 */}
        <div className={styles.cardDark}>
          <div className={styles.text}>
            <h3>Social media marketing</h3>
            <div className={styles.learnMore}>
              <Image className={styles.arrow} src="/white-arrow.png" alt="arrow" width={85} height={50} />
              <span>Learn more</span>
            </div>
          </div>

          <Image
            src="/social-media.png"
            alt="social"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.textEmail}>
            <h3>E-mail marketing</h3>
            <div className={styles.learnMore}>
              <Image className={styles.arrow} src="/black-arrow.png" alt="arrow" width={85} height={50} />
              <span>Learn more</span>
            </div>
          </div>

          <Image
            src="/email.png"
            alt="email"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
import Image from "next/image";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.make}>
      <div className={styles.makeText}>
        <h2>Let’s make things happen</h2>

        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <button className={styles.studyBtn}>Get your free proposal</button>
      </div>

      <div className={styles.makeImgDiv}>
        <Image
          src="/lets-make.png"
          alt="cta"
          className={styles.makeImg}
          width={550}
          height={600}
        />
      </div>
    </section>
  );
}
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.mainTitle}>
        <div className={styles.titleText}>
          <h1 className={styles.message}>
            Navigating the digital landscape for sucess
          </h1>

          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className={styles.consultationBtn}>Book a consultation</button>
        </div>

        <div className={styles.titleImgSection}>
          <Image
            src="/main-img.svg"
            alt="title-img"
            className={styles.titleImg}
            width={600}
            height={600}
          />
        </div>
      </section>

      <section className={styles.logoSection}>
        <Image className={styles.logos} src="/amazon-png.png" alt="amazon" width={130} height={40} />
        <Image className={styles.logos} src="/dribbble-png.png" alt="dribbble" width={130} height={40} />
        <Image className={styles.logos} src="/hubspot-png.png" alt="hubspot" width={130} height={40} />
        <Image className={styles.logos} src="/notion-png.png" alt="notion" width={130} height={50} />
        <Image className={styles.logos} src="/netflix-png.png" alt="netflix" width={130} height={40} />
        <Image className={styles.logos} src="/zoom-png.png" alt="zoom" width={130} height={35} />
      </section>
    </>
  );
}
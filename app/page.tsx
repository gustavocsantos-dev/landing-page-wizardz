import Header from "./components/Header";
import styles from "./page.module.css"
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.mainTitle}>
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
      </div>
      <div className={styles.logoSection}>
        <Image className={styles.logos} src="/amazon-png.png" alt="amazon" width={130} height={40} />
        <Image className={styles.logos} src="/dribbble-png.png" alt="dribbble" width={130} height={40} />
        <Image className={styles.logos} src="/hubspot-png.png" alt="hubspot" width={130} height={40} />
        <Image className={styles.logos} src="/notion-png.png" alt="notion" width={130} height={50} />
        <Image className={styles.logos} src="/netflix-png.png" alt="netflix" width={130} height={40} />
        <Image className={styles.logos} src="/zoom-png.png" alt="zoom" width={130} height={35} />
      </div>
      <section className={styles.subTitle}>
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </section>
      <section className={styles.grid}>
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
      <section className={styles.study}>
        <h1>Case study</h1>

        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </section>
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
    </>
  );
}

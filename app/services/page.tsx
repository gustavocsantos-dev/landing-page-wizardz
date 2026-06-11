import Header from "../components/Header"
import Image from "next/image"
import styles from "./services.module.css"

export default function Services(){
    return(
        <>
            <Header/>
            <section className={styles.mainTitle}>
                <div className={styles.titleText}>
                    <h1 className={styles.message}>
                       Tailored Digital Strategies, Engineered for Performace
                    </h1>
                    <p>
                        <strong>1. Algorithmic Growth Strategy:</strong>
                        In-depth analysis to
                        analysis contropuctive growths and optimize their
                        algorithm strategy, and for your growth.
                    </p>
                    <p>
                        <strong>2. Narrative Content Creation:</strong>
                        Crafting stories to
                        navigratting strategis, digita media, sooning, and
                        their reweech to moard straegies.
                    </p>
                    <p>
                        <strong>3. Technical SEO Optimization:</strong>
                        Ensuring visibility to
                        visibally isibility their SEO svecting, marketing and
                        conten, prestanents
                    </p>
                    <p>
                        <strong>4. Omnichannel Deployment:</strong>
                        Maximizing reach to
                        connectting spacs, custoizer nonops, and team with
                        optimizting onconding, to for suggesters.
                    </p>
                </div>

            <div className={styles.titleImgSection}>
                <section className={styles.textImgTop}>
                    <p>1. ALGORITHMIC GROWTH STRATEGY</p>
                    <h1>ENGINE OF GROWTH</h1>
                    <span>2. NARRATIVE CONTENT CREATION</span>
                </section>
                <Image
                    src="/services.png"
                    alt="title-img"
                    className={styles.titleImg}
                    width={850}
                    height={700}
                />
                <section className={styles.textImgBottom}>
                    <p>3. TECHNICAL SEO OPTIMIZATION</p>
                    <span>4. OMNICHANNEL DEPLOYMENT</span>
                </section>
            </div>
        </section>
        </>
    )
}
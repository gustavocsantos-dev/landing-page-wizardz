import Header from "../components/Header"
import styles from "./about.module.css"
import Image from "next/image"

export default function About(){
    return(
        <>
            <Header/>
            <section className={styles.mainTitle}>
                <div className={styles.titleText}>
                    <h1 className={styles.message}>
                        We craft digital narratives that resonate
                    </h1>

                    <p>
                        Wizardz is a specialized digital marketing
                        agency focused on merging cutting-edge
                        algorithas with powerful storytelling. We are
                        not just service providers; we are your
                        partners in growth.
                    </p>

                    <h3 className={styles.subtitle}>Our Philosophy: Clarity and Precision</h3>
                    <section className={styles.graphs}>
                        <Image
                            src="/graph-1.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/graph-2.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/graph-3.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/graph-4.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/graph-5.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/graph-6.png"
                            alt="graph"
                            className="graphImg"
                            width={70}
                            height={70}
                        />
                    </section>

                    <section className={styles.profiles}>
                        <div className={styles.profileDiv}>
                            <Image
                                src="/profile-1.png"
                                alt="profile"
                                className="profileImg"
                                width={140}
                                height={140}
                            />
                            <div className={styles.profileText}>
                                <h3>Liam Coft</h3>
                                <h3>Narrative Strategist</h3>
                            </div>
                        </div>
                            <div className={styles.profileDiv}>
                                <Image
                                    src="/profile-2.png"
                                    alt="profile"
                                    className="profileImg"
                                    width={140}
                                    height={140}
                                />
                                <div className={styles.profileText}>
                                    <h3>Ava Chen</h3>
                                    <h3>Lead Algorithm Architech</h3>
                                </div>
                        </div>
                    </section>
                    <section className={styles.profiles}>
                        <div className={styles.profileDiv}>
                            <Image
                                src="/profile-3.png"
                                alt="profile"
                                className="profileImg"
                                width={140}
                                height={140}
                            />
                            <div className={styles.profileText}>
                                <h3>Jasen Daherson</h3>
                                <h3>Narrative Strategist</h3>
                            </div>
                        </div>
                            <div className={styles.profileDiv}>
                                <Image
                                    src="/profile-4.png"
                                    alt="profile"
                                    className="profileImg"
                                    width={140}
                                    height={140}
                                />
                                <div className={styles.profileText}>
                                    <h3>Paul Raven</h3>
                                    <h3>Lead Algorithm Strategist</h3>
                                </div>
                        </div>
                    </section>
                </div>

            <div className={styles.titleImgSection}>
                <Image
                    src="/about-us.png"
                    alt="title-img"
                    className={styles.titleImg}
                    width={800}
                    height={800}
                />
            </div>
        </section>
        </>
    )
}
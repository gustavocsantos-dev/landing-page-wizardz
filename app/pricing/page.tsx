import Header from "../components/Header"
import Image from "next/image"
import styles from "./pricing.module.css"
export default function Pricing(){
    return(
        <>
            <Header/>
             <div className={styles.mainTitle}>
                <p>[ select_package ]</p>
                <h1>pricing_models</h1>
                <span>Transparent, data-driven investment tiers for companies ready to scale their digital narrative.</span>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Investment Logic</h1>
                </div>
                
                <div className={styles.cardSquare}>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/coin.png"
                            alt="coin"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Zero Hidden Fees</h2>
                        <p>What you see is what you get. Our algorithmic models account for all variables from day one.</p>
                    </div>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/tiles.png"
                            alt="tiles"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Elastic Scaling</h2>
                        <p>Upgrade or refine your service stack as your data matures. We grow with your revenue.</p>
                    </div>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/external-link.png"
                            alt="external-link"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Results Linked</h2>
                        <p>Our premium tiers include performance-based incentives, aligning our wizards with your success.</p>
                    </div>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Service Tiers</h1>
                </div>
                <div className={styles.pricingCards}>
                    <div className={styles.pricingCard}>
                        <span className={styles.planName}>Starter</span>

                        <h2 className={styles.price}>
                            $2.5k<span>/mo</span>
                        </h2>

                        <ul className={styles.features}>
                            <li>Basic SEO Audit</li>
                            <li>2 Content Marathons</li>
                            <li>Meta Ad Setup</li>
                        </ul>

                        <button>Initialize</button>
                    </div>
                    <div className={styles.pricingCard}>
                        <span className={styles.planName}>Growth</span>

                        <h2 className={styles.price}>
                            $5.0k<span>/mo</span>
                        </h2>

                        <ul className={styles.features}>
                            <li>Full Funnel Engineering</li>
                            <li>5 Content Marathons</li>
                            <li>Data Dashboard Access</li>
                        </ul>

                        <button className={styles.featuredBtn}>Scale Up</button>
                    </div>
                    <div className={styles.pricingCard}>
                        <span className={styles.planName}>Elite</span>

                        <h2 className={styles.price}>
                            Custom
                        </h2>

                        <ul className={styles.features}>
                            <li>Omnichannel Blitz</li>
                            <li>Dedicated Strategist</li>
                            <li>CRO Testing Suite</li>
                        </ul>
                        <button>Contact Ops</button>
                    </div>
                </div>
            </div>
            <div className={styles.featureComparison}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Feature Comparison</h1>
                </div>
                <div className={styles.cardTable}>
                    <div className={styles.tableContainer}>
                        <table className={styles.caseTable}>
                            <thead>
                                <tr>
                                    <th>Service Attribute</th>
                                    <th>Starter</th>
                                    <th>Growth</th>
                                    <th>Elite</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Algorithm Audit</td>
                                    <td>Monthly</td>
                                    <td>Weekly</td>
                                    <td>Real-time</td>
                                </tr>

                                <tr>
                                    <td>Creative Assets</td>
                                    <td>3 Sets</td>
                                    <td>10 Sets</td>
                                    <td>Unlimited</td>
                                </tr>

                                <tr>
                                    <td>API Integration</td>
                                    <td>-</td>
                                    <td className={styles.highlight}>✓</td>
                                    <td className={styles.highlight}>✓</td>
                                </tr>
                                <tr>
                                    <td>Priority Support</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td className={styles.highlight}>✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Growth Logic</h1>
                </div>
                <div className={styles.growthFlex}>
                    <div className={styles.growth}>
                        <h2>Automated Performance</h2>
                        <p>Our pricing reflects the technical complexity of the solutions we deploy. We don't just "run ads"; we build digital infrastructure that appreciates over time.</p>
                        <p>By investing in a Wizardz tier, you are unlocking proprietary logic used by the world's fastest-growing startups.</p>
                    </div>
                    <div className={styles.growthImgDiv}>
                        <Image
                            src="/trend2.png"
                            alt="trend"
                            width={250}
                            height={250}
                            className={styles.growthImg}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerText}>
                    <div className={styles.footerTitle}>
                        <div className={styles.icon}></div>
                        <h6>Investment Impact</h6>
                    </div>
                    <div className={styles.footerSections}>
                        <section>
                            <p>12.4x</p>
                            <span>Average ROAS</span>
                        </section>
                        <section>
                            <p>-35%</p>
                            <span>Acquisition Cost</span>
                        </section>
                        <section>
                            <p>4.2k+</p>
                            <span>Campaigns Deployed</span>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
import Header from "../components/Header"
import Image from "next/image"
import styles from "./use-cases.module.css"
import { pipeline } from "stream"

export default function UseCases(){
    return(
        <>
            <Header/>
            <div className={styles.mainTitle}>
                <h1>wizardz<strong>.</strong>use_cases</h1>
                <p>Real results. Algorithmic precision</p>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Driving Growth</h1>
                </div>
                
                <div className={styles.cardSquare}>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/cpu.png"
                            alt="processor"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Data-first</h2>
                        <p>Every case study starts with deep analytical decoding of current market friction points.</p>
                    </div>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/testing-tube.png"
                            alt="processor"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Engineered</h2>
                        <p>We don't guess. We engineer campaigns that scale based on proven performance loops.</p>
                    </div>
                    <div className={styles.cardSquareItem}>
                        <Image
                            src="/line-chart.png"
                            alt="processor"
                            className={styles.squareImg}
                            width={50}
                            height={50}
                        />
                        <h2>Impact-Led</h2>
                        <p>Focusing on the metrics that matter: Revenue growth and customer acquisition cost.</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>E-commerce Scaling</h1>
                </div>
                <div className={styles.ecommerceFlex}>
                    <div className={styles.ecommerce}>
                        <h2>The Challenge</h2>
                        <p>Scaling an apparel brand without compromising the ROAS floor</p>
                        <ul>
                            <li>Optimization of dynamic search ads.</li>
                            <li>Automated retargeting funnels.</li>
                            <li>Inventory-synced creative deployment</li>
                        </ul>
                    </div>
                    <div className={styles.ecommerceImgDiv}>
                        <Image
                            src="/development.png"
                            alt="development"
                            width={250}
                            height={250}
                            className={styles.ecommerceImg}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Client Distribution</h1>
                </div>
                <div className={styles.client}>
                    <div>
                        <Image
                            src="/graph-circle.png"
                            alt="graph-circle"
                            width={450}
                            height={450}
                            className={styles.clientImg}
                        />
                    </div>
                    <div className={styles.clientStats}>
                        <section className={styles.squareSection}>
                            <div className={styles.square1}></div>
                            <p>45% E-commerce & Retail</p>
                        </section>
                        <section className={styles.squareSection}>
                            <div className={styles.square2}></div>
                            <p>30% Technology</p>
                        </section>
                        <section className={styles.squareSection}>
                            <div className={styles.square3}></div>
                            <p>25% Professional Services</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className={styles.cardTrend}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Agreggated Growth Trend</h1>
                </div>
                <div className={styles.trend}>
                    <Image
                        src={"/trend.png"}
                        width={1100}
                        height={1000}
                        alt="trend"
                        className={styles.trendImg}
                    />
                    <section className={styles.trendText}>
                        <p>Q1</p>
                        <p>Q2</p>
                        <p>Q3</p>
                        <p>Q4</p>
                        <p>Launch</p>
                    </section>
                </div>
            </div>
            <div className={styles.cardTable}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Recent Milestones</h1>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.caseTable}>
                        <thead>
                        <tr>
                            <th>Client Sector</th>
                            <th>Core Strategy</th>
                            <th>Duration</th>
                            <th>Outcome</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>FinTech SaaS</td>
                            <td>Inbound Pipeline</td>
                            <td>6 Months</td>
                            <td className={styles.highlight}>+300% leads</td>
                        </tr>

                        <tr>
                            <td>Luxury Fashion</td>
                            <td>Paid Social Scale</td>
                            <td>3 Months</td>
                            <td className={styles.highlight}>9.2x ROAS</td>
                        </tr>

                        <tr>
                            <td>B2B Logistics</td>
                            <td>Content Authority</td>
                            <td>12 Months</td>
                            <td className={styles.highlight}>Top 1 SERP</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <div className={styles.icon}></div>
                    <h1>Case Study Pipeline</h1>
                </div>
                <div className={styles.pipelineCircles}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
                <div className={styles.pipelineLine}></div>
                <div className={styles.pipelineTexts}>
                    <div>
                        <h5>Week 1</h5>
                        <p>Data auditing and client clearance.</p>
                    </div>
                    <div>
                        <h5>Week 2</h5>
                        <p>Narrative engineering and visuals.</p>
                    </div>
                    <div>
                        <h5>Week 3</h5>
                        <p>Technical implementation in NextJS.</p>
                    </div>
                    <div>
                        <h5>Week 4</h5>
                        <p>Deployment and social amplification.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Image
                    src="/quotation-mark.png"
                    alt="quotation-mark"
                    width={50}
                    height={50}
                    className={styles.footerImg}
                />
                <div className={styles.footerText}>
                    <h6>"Wizardz transformed our digital footprint. Their algorithmic approach to content is unlike any other agency we've worked with."</h6>
                    <p>— CEO, VentureX SaaS</p>
                </div>
            </div>
        </>
    )
}
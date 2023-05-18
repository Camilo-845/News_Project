import React from "react";
import styles from "./LandingPage.module.css"
import referenceImage from "../../../../referenceImages/_06aded8d-679a-4e15-9333-0de56adecb84.jpg";

import Bubble from "../../components/Bubble/Bubble";
import NewsSection from "../../components/NewsSections/NewsSection";
import { datosPruebaNewsSection } from "../../utils/data";

function LandingPage() {
    return (
        <article className={styles.mainContainer}>
            <Bubble size="30rem" right="1rem" bottom="1rem"></Bubble>
            <Bubble size="15rem" right="1rem"></Bubble>
            <Bubble size="31rem"></Bubble>
            <Bubble size="15rem" left="50vw"></Bubble>
            <div className={styles.divPrueba}></div>
            <header className={styles.headerContainer}>
                <figure>
                    <a className={styles.logo} href="/">
                        <h1>AT!</h1>
                    </a>
                </figure>
                <section className={styles.signButtons}>
                    <button>
                        <h1 className={styles.login}>LogIn</h1>
                    </button>
                    <button>
                        <h1 className={styles.signup}>SignUp</h1>
                    </button>
                </section>
            </header>
            <main className={styles.mainSection}>
                <article className={styles.mainText}>
                    <h1 className={styles.punchline}><span>The most relevant and up-to-date news, all in one place:</span>  <span className={styles.actualityH1}>Actuality</span></h1>
                    <section className={styles.categoriesList}>
                        <h4>Breaking News</h4>
                        <h4>Politics</h4>
                        <h4>Business</h4>
                        <h4>Technology</h4>
                        <h4>Entertainment</h4>
                        <h4>Sports</h4>
                    </section>
                    <article className={styles.welcomeButtons}>
                        <button>SignUp</button>
                        <button>See more</button>
                    </article>
                </article>
                <article className={styles.principalNew}>
                    <figure className={styles.principalNewImage}>
                        <img src={referenceImage} alt="" />
                    </figure>
                    <h2>China Launches First Module of Space Station</h2>
                    <p>The President of the United States addressed the nation today to announce new measures aimed at tackling the ongoing climate crisis. The plan includes a major shift towards renewable energy sources, with a goal of achieving net-zero greenhouse gas emissions by 2050.</p>
                </article>
            </main>
            <NewsSection size="medium" data={datosPruebaNewsSection}></NewsSection>
        </article>
    )
}

export default LandingPage;
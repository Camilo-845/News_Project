import React from "react";
import styles from "./LandingPage.module.css"
import referenceImage from "../../../../referenceImages/_06aded8d-679a-4e15-9333-0de56adecb84.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Bubble from "../../components/Bubble/Bubble";
import NewsSection from "../../components/NewsSections/NewsSection";
import Footer from "../../components/Footer/Footer";
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
                    <a href="/login">
                        <button>
                            <h1 className={styles.login}>LogIn</h1>
                        </button>
                    </a>
                    <a href="/signup">
                        <button>
                            <h1 className={styles.signup}>SignUp</h1>
                        </button>
                    </a>
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
                        <a href="/signup">
                            <button>SignUp</button>
                        </a>
                        <a href="/login">
                            <button>See more</button>
                        </a>
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
            <article className={styles.newsCarrousels}>
                <Bubble size="20rem"></Bubble>
                <Bubble size="15rem" bottom="1rem" left="15rem"></Bubble>
                <NewsSection size="medium" data={datosPruebaNewsSection}></NewsSection>
            </article>
            <article className={styles.categoriesCarrousels}>
                <Bubble size="20rem" bottom="-1rem" right="20rem"></Bubble>
                <Bubble size="15rem" bottom="1rem" left="15rem"></Bubble>
                <h1 className={styles.categoryName}>Technology</h1>
                <NewsSection size="small" data={datosPruebaNewsSection}></NewsSection>
                <h1 className={styles.categoryName}>Sports</h1>
                <NewsSection size="small" data={datosPruebaNewsSection}></NewsSection>
                <h1 className={styles.categoryName}>Business</h1>
                <NewsSection size="small" data={datosPruebaNewsSection}></NewsSection>
                <h1 className={styles.categoryName}>Health</h1>
                <NewsSection size="small" data={datosPruebaNewsSection}></NewsSection>
            </article>
            <Footer></Footer>
        </article>
    )
}

export default LandingPage;
import React from "react";
import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
        <article className={styles.mainContainer}>
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
                <article>
                    <figure>

                    </figure>
                    <h2></h2>
                    <p></p>
                </article>
            </main>
        </article>
    )
}

export default LandingPage;
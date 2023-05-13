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
            <main>
                <article>

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
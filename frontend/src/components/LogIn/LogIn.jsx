import React from "react";
import styles from "./LogIn.module.css"


function LogIn (){
    return (
        <article className={styles.mainContainer}>
            <article className={styles.loginContainer}>
                <section className={styles.mainText}>
                    <h2>Welcome to</h2>
                    <br />
                    <h1>AT!</h1>
                    <h2>Actuallity</h2>
                </section>
                <section className={styles.formContainer}>
                    <h2>Log in to your account</h2>
                    <br />
                    <form action="">
                        <h2>Email Address</h2>
                        <input type="text" />
                        <br />
                        <h2>Password</h2>
                        <input type="text" />
                        <br />
                        <input type="submit" />
                    </form>
                    <a href="/signup"><p>Don't have an account?</p></a>
                </section>
                <a className={styles.exitButton} href="/">
                    <button>X</button>
                </a>
            </article>
        </article>
    )
}

export default LogIn;
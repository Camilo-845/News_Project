import React from "react";
import styles from "./SignUp.module.css"

function SignUp(){
    return (
        <article className={styles.mainContainer}>
            <article className={styles.loginContainer}>
                <section className={styles.mainText}>
                    <h2>Welcome to</h2>
                    <br />
                    <section>
                        <h1>AT!</h1>
                        <h2>Actuality</h2>
                    </section>
                </section>
                <section className={styles.formContainer}>
                    <h2>SignUp</h2>
                    <form action="">
                        <section>
                            <h2>Username</h2>
                            <input type="text" />
                            <h2>Email</h2>
                            <input type="text" />
                            <h2>Password</h2>
                            <input type="text" />
                            <h2>Confirm password</h2>
                            <input type="text" />
                        </section>
                        <input value={"SignUp"} type="submit" />
                    </form>
                </section>
                <a className={styles.exitButton} href="/">
                    <button>x</button>
                </a>
            </article>
        </article>
    )
}

export default SignUp;
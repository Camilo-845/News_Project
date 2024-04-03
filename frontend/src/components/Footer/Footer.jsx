import React from "react";
import styles from "./Footer.module.css"
function Footer() {
    return (
            <footer className={styles.footer}>
                <section className={styles.footerLinks}>
                    <article>
                        <a href="#"><p>About</p></a>
                        <a href="#"><p>Contact</p></a>
                        <a href="#"><p>Frequently Asked Questions</p></a>
                        <a href="#"><p>Terms and Conditions</p></a>
                    </article>
                    <article>
                        <a href="https://www.linkedin.com/in/camilo-sarmiento-051a80244/" target="_blank"><p>LinkedIn</p></a>
                        <a href="#"><p>Twitter</p></a>
                        <a href="https://github.com/Camilo-845" target="_blank"><p>GitHub</p></a>
                        <a href="#"><p>Instagram</p></a>
                    </article>
                </section>
                <section className={styles.footerInfo}>
                    <article>
                        <a className={styles.logoFooter} href="/">
                            <h1>AT!</h1>
                        </a>
                        <p>© Actuality  2023</p>
                    </article>
                    <article>
                        <p className={styles.tagDesingBy}>Design by</p>
                        <p>Camilo Sarmiento</p>
                    </article>

                </section>
            </footer>
    )
}

export default Footer;
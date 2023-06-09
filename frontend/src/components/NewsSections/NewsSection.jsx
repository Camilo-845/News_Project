import React from "react";
import styles from "./NewsSection.module.css"

function NewsSection({ size, data }) {
    const customStyle = {
        "min-width": (size === "medium") ? "20rem" : "15rem",
        "max-width": (size === "medium") ? "20rem" : "15rem",
        height: (size === "medium") ? "max-content" : "15rem"
    }
    return (
        <section className={styles.mainContainer}>
            {data ? data.slice(0, 4).map(el => {
                return (
                    <article style={customStyle} className={styles.newContainer} key={el}>
                        <figure className={styles.newImage}>
                            <img src={el.image} alt="" />
                        </figure>
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                    </article>
                )
            })
                : <></>
            }
        </section>
    )
}

export default NewsSection
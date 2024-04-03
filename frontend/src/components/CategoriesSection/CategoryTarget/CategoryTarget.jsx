import React from "react";
import styles from "./CategoryTarget.module.css"

function CategoryTarget({data}){
    return (
        <article className={styles.mainContainer}>
            <p>{data}</p>
        </article>
    )
}

export default CategoryTarget
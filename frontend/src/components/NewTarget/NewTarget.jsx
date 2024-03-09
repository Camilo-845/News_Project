import React from "react";
import styles from "./NewTarget.module.css"
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import {cambiarFormatoFecha} from "../../utils/utilFuctions.js"

function NewTarget({data}){
    const defaultData = {
        id: (data &&data.hasOwnProperty("_id"))?data._id:"",
        title: (data &&data.hasOwnProperty("title"))?data.title:"",
        description: (data &&data.hasOwnProperty("description"))?data.description:"",
        url: (data &&data.hasOwnProperty("url"))?data.url:"",
        author: (data &&data.hasOwnProperty("author"))?data.author:"",
        image: (data &&data.hasOwnProperty("image"))?data.image:" ",
        lenguage: (data &&data.hasOwnProperty("lenguage"))?data.lenguage:"",
        category:(data &&data.hasOwnProperty("category"))?data.category:"",
        published:(data && data.hasOwnProperty("published"))?cambiarFormatoFecha(data.published, "DD/MM/YYYY"):"",
        comments: (data && data.hasOwnProperty("comments"))?data.comments:""
    }
    return (
        <article className={styles.mainContainer}>
            <picture>
                <img src={defaultData.image} alt={defaultData.title}/>
            </picture>
            <article className={styles.mainContent}>
                <section className={styles.newTitle}>
                    <h1>{defaultData.title}</h1>
                </section>
                <article>
                    <p className={styles.newDescription}>{defaultData.description}</p>
                    <CategoriesSection data={defaultData.category}></CategoriesSection>
                    <p className={styles.newUpdated}>{defaultData.published}</p>
                    <p className={styles.newAutor}>By {defaultData.author}</p>
                    <a className={styles.newOriginalLink} href={defaultData.url} target="_blank">
                        <p>Original New</p>
                    </a>
                </article>
                <article className={styles.commentsContainer}>
                    <h3>Comments</h3>
                    <article>
                        <div className={styles.CommentSendContainer}>
                            <textarea className={styles.commentInput}/>
                            <button className={styles.commentSendButton}>Send</button>
                        </div>
                        <article className={styles.newCommentsContainer}>
                            {defaultData.comments.map((el)=>{
                                return(
                                    <article>
                                        <p className={styles.comemntUsername}>{el.hasOwnProperty("username")?el.username:"Username"}</p>
                                        <p className={styles.commetContent}>{el.hasOwnProperty("comment")?el.comment:"No content"}</p>
                                    </article>
                                )
                            })}
                        </article>
                    </article>
                </article>
            </article>
        </article>
    )
}

export default NewTarget
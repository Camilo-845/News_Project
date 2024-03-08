import React from "react";
import styles from "./NewTarget.module.css"
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import {cambiarFormatoFecha} from "../../utils/utilFuctions.js"

function NewTarget({data}){
    const defaultData = {
        id: (data &&data.hasOwnProperty("_id"))?data._id:"",
        title: (data &&data.hasOwnProperty("title"))?data.title:"",
        description: (data &&data.hasOwnProperty("description"))?`${data.description.slice(0,150)}...`:"",
        url: (data &&data.hasOwnProperty("url"))?data.url:"",
        author: (data &&data.hasOwnProperty("author"))?`Por: ${ data.author}`:"",
        image: (data &&data.hasOwnProperty("image"))?data.image:" ",
        lenguage: (data &&data.hasOwnProperty("lenguage"))?data.lenguage:"",
        category:[(data &&data.hasOwnProperty("category"))?data.category:"",],
        published:(data && data.hasOwnProperty("published"))?cambiarFormatoFecha(data.published, "DD/MM/YYYY"):"",
        comments: [(data && data.hasOwnProperty("comments"))?data.comments:""]
    }
    return (
        <article>
            <picture className={styles.hola}>
                <img src={defaultData.image} alt={defaultData.title}/>
            </picture>
            <section>
                <h1>{defaultData.title}</h1>
            </section>
            <main>
                <p>{defaultData.description}</p>
                <CategoriesSection data={defaultData.category}></CategoriesSection>
                <p>{defaultData.published}</p>
                <p>By: {defaultData.author}</p>
                <a href={defaultData.url} target="_blank">
                    Original New
                </a>
            </main>
            <article>
                <h3>Comments</h3>
                <article>
                    <input type="text" />
                    <button>Send</button>
                    <article>
                        {defaultData.comments.map((el)=>{
                            return(
                                <article>
                                    <p>{el.hasOwnProperty("username")?el.username:"Username"}</p>
                                    <p>{el.hasOwnProperty("comment")?el.comment:"No content"}</p>
                                </article>
                            )
                        })}
                    </article>
                </article>
            </article>
        </article>
    )
}

export default NewTarget
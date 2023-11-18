import React from "react";
import styles from "./NewWideSection.module.css"
function NewWideSection({data}){
    const landing = false;
    const defaultData = {
        id: (data &&data.hasOwnProperty(id))?data.id:"",
        title: (data &&data.hasOwnProperty(title))?data.title:"",
        description: (data &&data.hasOwnProperty(description))?data.description.slice(0,150):"",
        url: (data &&data.hasOwnProperty(url))?data.url:"",
        author: (data &&data.hasOwnProperty(author))?`Por:${ data.author}`:"",
        image: (data &&data.hasOwnProperty(image))?data.image:" ",
        lenguage: (data &&data.hasOwnProperty(lenguage))?data.lenguage:"",
        category:[
            (data &&data.hasOwnProperty(category))?data.category:"",
        ],
        published:(data && data.published)?data.published:""
    }
    return(
        <article className={styles.mainContainer}>
            <p className={landing?styles.published_Date_Landing:styles.published_Date}>{defaultData.published}</p>
            <article className={landing?styles.newTextContiner_Landing:styles.newTextContiner}>
                <h2>{defaultData.title}</h2>
                <p>{defaultData.description}</p>
                <p>{defaultData.author}</p>
            </article>
            <picture className={styles.imgageContainer}>
                <img src={defaultData.image} alt="" />
            </picture>
        </article>
    )
}

export default NewWideSection;
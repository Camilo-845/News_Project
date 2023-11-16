import React from "react";
import styles from "./RootHome.module.css"
import NewsList from "../NewsList/NewsList";
function RootHome() {
    const defaultData =  Array.from({ length: 10 }).map((el, index)=>{
        return{"_id": `index${index}`, "id": "", "title": "", "description": "",
        "url": "","author": "","image": "","category": [""],
        "published": "","comments": [],"createdAt": "","updatedAt": ""
    }});
    const data = [];
    return (
        <main className={styles.mainContainer}>
            <NewsList data={(data.length!==0)?data:defaultData}></NewsList>
        </main>
    )
}

export default RootHome;
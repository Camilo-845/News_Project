import React from "react";
import styles from "./RootHome.module.css"
import NewsList from "../NewsList/NewsList";
import NewsSection from "../../../components/NewsSections/NewsSection";
import { datosPruebaNewsSection } from "../../../utils/data";


function RootHome() {
    const defaultData =  Array.from({ length: 10 }).map((el, index)=>{
        return{"_id": `index${index}`, "id": "", "title": "", "description": "",
        "url": "","author": "","image": "","category": [""],
        "published": "","comments": [],"createdAt": "","updatedAt": ""
    }});
    const data = [];
    return (
        <main className={styles.mainContainer}>
            <NewsSection data={datosPruebaNewsSection.slice(0,4)} size="medium"></NewsSection>
            <NewsSection data={datosPruebaNewsSection} size="small"></NewsSection>
            <NewsSection data={datosPruebaNewsSection} size="small"></NewsSection>
            <NewsList data={/* (data.length!==0)?data:defaultData */datosPruebaNewsSection}></NewsList>
        </main>
    )
}

export default RootHome;
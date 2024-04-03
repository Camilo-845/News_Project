import React from "react";
import styles from "./CategoriesSection.module.css"
import CategoryTarget from "./CategoryTarget/CategoryTarget";

function CategoriesSection({data}){
    return (
        <main className={styles.mainContainer}>
            {data ? data.map((el)=>{
                console.log(data)
                return(
                    <CategoryTarget key={el} data={el} ></CategoryTarget>
                )
            }):<></>
        }
        </main>
    )
}

export default CategoriesSection
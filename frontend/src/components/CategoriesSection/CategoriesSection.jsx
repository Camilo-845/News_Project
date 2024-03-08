import React from "react";
import styles from "./CategoriesSection.module.css"
import CategoryTarget from "./CategoryTarget/CategoryTarget";

function CategoriesSection({data}){
    return (
        <main>
            {data ? data.map((el)=>{
                <CategoryTarget data={el} ></CategoryTarget>
            }):<></>
        }
        </main>
    )
}

export default CategoriesSection
import React from "react";
import NewWideSection from "../../../components/NewWideSection/NewWideSection";
import styles from "./NewsList.module.css"
import filterIcon from "../../../assets/setting-5-svgrepo-com.svg"
function NewsList({data}){

    const categories = [];
    return (
        <section>
            <section className={styles.filterContainer}>
                <picture>
                    <img src={filterIcon} alt="Filter settings logo" />
                </picture>
                <article className={styles.filtros}>
                    <div>
                        <h3>Category</h3>
                        <select name="category" id="all">
                            <option value="">Select</option>
                            {categories?.map(category => {
                                return (<option value={`${category.id}`} key={category.id}>{category.name.toUpperCase()}</option>
                                )
                            })}
                        </select>
                    </div>
                </article>
            </section>
            {data?data.map((element) => {
                return (
                    <article key={element.id}>
                        <NewWideSection data={element}></NewWideSection>
                    </article>
                )
            }):null}
        </section>
    )
}

export default NewsList;
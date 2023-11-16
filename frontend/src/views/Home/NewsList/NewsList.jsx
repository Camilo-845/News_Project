import React from "react";
import NewWideSection from "../../../components/NewWideSection/NewWideSection";

function NewsList({data}){
    return (
        <section>
            {data?data.map((element) => {
                return (
                    <article key={element._id}>
                        <NewWideSection name={element.title}></NewWideSection>
                    </article>
                )
            }):null}
        </section>
    )
}

export default NewsList;
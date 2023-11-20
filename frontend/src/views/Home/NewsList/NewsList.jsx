import React from "react";
import NewWideSection from "../../../components/NewWideSection/NewWideSection";

function NewsList({data}){
    return (
        <section>
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
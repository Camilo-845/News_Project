import React from "react";
import styles from "./Bubble.module.css"

function Bubble({size, top, bottom,left,right}){
    const customStyle = {
        position:"fixed",
        width:size?size:"5rem",
        height:size?size:"5rem",
        top:top?top:"auto",
        bottom:bottom?bottom:"auto",
        left:left?left:"auto",
        right:right?right:"auto",
    }
    return <div style={customStyle} className={styles.mainDiv}></div>
}

export default Bubble;
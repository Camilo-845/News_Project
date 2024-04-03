import React from "react";
import styles from "./NewDetail.module.css"
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import NewTarget from "../../../components/NewTarget/NewTarget";
import {datosPruebaNewsSection} from "../../../utils/data"
function NewDetail (){

    return (
        <>
            <NavBar></NavBar>
            <NewTarget data={datosPruebaNewsSection[5]}></NewTarget>
            <Footer></Footer>
        </>
    )
}

export default NewDetail
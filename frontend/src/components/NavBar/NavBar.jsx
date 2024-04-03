import React, { useRef } from "react";
import styles from "./NavBar.module.css";

function NavBar() {

    const searchInput = useRef(null);

    const onPressEnterHandler = (event) => {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            event.target.value = ""
        }
    };
    const onSearchHandler = (event) => {
        console.log(searchInput.current.value)
        searchInput.current.value = "";
    }

    const onClickHandler = (event) => {
        event.preventDefault();
        const section = document.getElementById("userIcon");
        section.style.display = (section.style.display == "none")?"block":"none"
    }

    return (
        <header className={styles.headerContainer}>
            <figure>
                <a className={styles.logo} href="/home">
                    <h1>AT!</h1>
                </a>
            </figure>
            <nav className={styles.navButtons}>
                <a className={styles.homeButton}
                style={{color:(window.location.href.split("/").pop()!="favorites")?"white":""}} 
                href="/home/">HOME
                </a>
                <a className={styles.favoritesButton} 
                style={{color:(window.location.href.split("/").pop()=="favorites")?"white":""}}
                href="/home/favorites">FAVORITES
                </a>
            </nav>
            <section className={styles.logItems}>
                <input type="text" ref={searchInput} onKeyDown={(event) => onPressEnterHandler(event)} id="hola" />
                <button id="searchButton" onClick={(event) => onSearchHandler(event)}>
                    <img src="https://www.svgrepo.com/show/521826/search.svg" alt="lupa de busqueda" />
                </button>
                <figure onClick={e=>onClickHandler(e)} >
                    <h1>C</h1>
                    <section id="userIcon" className={styles.userSettignsButton}>
                        <button >Cerrar Sesion</button>
                    </section>
                </figure>
            </section>
        </header>
    )
}

export default NavBar;
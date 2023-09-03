import React, { useRef } from "react";
import { useEffect } from "react";
import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function NavBar() {

    const searchInput = useRef(null);
    const navButtons = {
        focusButton: {
            ref: useRef(null),
        },
        homeButton: {
            ref: useRef(null),
            hoverHandler: (event) => {
                navButtons.focusButton.ref.current.style = `left:calc(${navButtons.homeButton.ref.current.offsetLeft}px - 10px)`
            },
        },
        favoritesButton: {
            ref: useRef(null),
            hoverHandler: (event) => {
                navButtons.focusButton.ref.current.style = `left:calc(${navButtons.favoritesButton.ref.current.offsetLeft}px + 5px)`
            }
        },
        blurHandler:(event)=>{
            if (actualUrl.split("/").pop() == "favorites") {
                navButtons.focusButton.ref.current.style = `left:calc(${navButtons.favoritesButton.ref.current.offsetLeft}px - 17px)`;
            } else {
                focusButton.style = `left:calc(${navButtons.homeButton.ref.current.offsetLeft}px - 10px)`;
            }
        },
    }

    useEffect(() => {
        const homeButton = navButtons.homeButton.ref.current;
        const favoritesButton = navButtons.favoritesButton.ref.current;
        const focusButton = navButtons.focusButton.ref.current;

        const actualUrl = window.location.href;

        if (actualUrl.split("/").pop() == "favorites") {
            focusButton.style = `left:calc(${favoritesButton.offsetLeft}px - 17px)`;
        } else {
            focusButton.style = `left:calc(${homeButton.offsetLeft}px - 10px)`;
        }
    });

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

    return (
        <header className={styles.headerContainer}>
            <figure>
                <a className={styles.logo} href="/">
                    <h1>AT!</h1>
                </a>
            </figure>
            <nav className={styles.navButtons}>
                <a className={styles.homeButton} 
                onMouseOver={(event) => { navButtons.homeButton.hoverHandler(event) }}
                onBlur={(event)=>{navButtons.blurHandler(event)}}
                ref={navButtons.homeButton.ref} href="/home/">HOME
                </a>
                <div ref={navButtons.focusButton.ref} className={styles.focusButton}></div>
                <a className={styles.favoritesButton} 
                onMouseOver={(event) => { navButtons.favoritesButton.hoverHandler(event) }} 
                ref={navButtons.favoritesButton.ref} 
                href="/home/favorites">FAVORITES
                </a>
            </nav>
            <section className={styles.logItems}>
                <input type="text" ref={searchInput} onKeyDown={(event) => onPressEnterHandler(event)} id="hola" />
                <button id="searchButton" onClick={(event) => onSearchHandler(event)}>
                    <img src="https://www.svgrepo.com/show/521826/search.svg" alt="" />
                </button>
                <figure>
                    <img src="" alt="" />
                </figure>
            </section>
        </header>
    )
}

export default NavBar;
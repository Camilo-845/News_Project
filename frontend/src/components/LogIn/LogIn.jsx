import React from "react";
import styles from "./LogIn.module.css"


function LogIn (){
    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const onChangeHandler = (event) =>{
        event.preventDefault();
        setState({
            ...state,
            [event.target ? event.target.name : "nombre"]: (event.target) ? event.target.value : ""
        })
    }

    const onClickHandler = (event)=>{
        event.preventDefault();
        //hacer peteción a Backend con la información del estado    
    }
    return (
        <article className={styles.mainContainer}>
            <article className={styles.loginContainer}>
                <section className={styles.mainText}>
                    <h2>Welcome to</h2>
                    <br />
                    <section>
                        <h1>AT!</h1>
                        <h2>Actuality</h2>
                    </section>
                </section>
                <section className={styles.formContainer}>
                    <h2>Log in to your account</h2>
                    <br />
                    <form action="">
                        <section>
                            <h2>Email Address</h2>
                            <input type="text" name="email" onChange={(e)=>onChangeHandler(e)} />
                            <br />
                            <h2>Password</h2>
                            <input type="text" name="password" onChange={(e)=>onChangeHandler(e)} />
                        </section>
                        <br />
                        <br />
                        <input value={"LogIn"} type="submit" />
                    </form>
                    <a href="/signup"><p>Don't have an account?</p></a>
                </section>
                <a className={styles.exitButton} href="/">
                    <button>x</button>
                </a>
            </article>
        </article>
    )
}

export default LogIn;
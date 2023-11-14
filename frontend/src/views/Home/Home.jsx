import React from "react";
import styles from "./Home.module.css"
import NavBar from "../../components/NavBar/NavBar";
import RootHome from "./rootHome/RootHome";
import Favorites from "./favorites/favorites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
function Home() {
    return (
        <main>
            <NavBar></NavBar>
            <Router>
                <Switch>
                    <Route exact path='/home' component={RootHome}/>
                    <Route path='/home/favorites' component={Favorites}/>
                </Switch>
            </Router>
            {/* <iframe width="560" height="315" src="https://musiclab.chromeexperiments.com/Song-Maker/embed/5323389454254080" frameborder="0" allowfullscreen></iframe> */}
        </main>
    )
}

export default Home;
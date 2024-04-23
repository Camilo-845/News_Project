import React from "react";
import styles from "./Home.module.css"
import NavBar from "../../components/NavBar/NavBar";
import RootHome from "./rootHome/RootHome";
import Favorites from "./favorites/favorites";
import Footer from "../../components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions/index';

function Home() {
    const dispatch = useDispatch();
    
    
    var data = useSelector(state=>state.categories)

    const make = (e) =>{
        e.preventDefault();
        dispatch(actions.getCategories())
        .then(()=>{
            console.log(data)
        })
    }
    return (
        <main>
            <NavBar></NavBar>
            <button onClick={(e)=>make(e)}>hAZLO PA</button>
            <Router>
                <Switch>
                    <Route exact path='/home' component={RootHome}/>
                    <Route path='/home/favorites' component={Favorites}/>
                </Switch>
            </Router>
            <Footer></Footer>
            {/* <iframe width="560" height="315" src="https://musiclab.chromeexperiments.com/Song-Maker/embed/5323389454254080" frameborder="0" allowfullscreen></iframe> */}

        </main>
    )
}

export default Home;
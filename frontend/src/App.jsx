import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import NewDetail from './views/Home/NewDetail/NewDetail';
import NotFound from './views/NotFound/NotFound';

import './App.css'

function App() {
    return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path="/login">
                        <LogIn></LogIn>
                        <LandingPage></LandingPage>
                    </Route>
                    <Route path="/signup">
                        <SignUp></SignUp>
                        <LandingPage></LandingPage>
                    </Route>
                    <>
                        <Switch>
                            <Route path="/new/:id">
                                <NewDetail></NewDetail>
                            </Route>
                            <Route path="/home" component={Home} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </>
                </Switch>
            </Router>
    )
}

export default App

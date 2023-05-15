import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

import './App.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </>
            </Switch>
        </Router>
    )
}

export default App

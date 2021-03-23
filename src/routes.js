import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavBar';

import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
        <NavigationBar></NavigationBar>
            <Switch>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
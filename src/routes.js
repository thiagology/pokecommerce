import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Auth from "./pages/Auth";

const Routes = () => (
  <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/wishlist" exact component={Wishlist} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

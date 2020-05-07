import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Page from './Page';
import Personnage from './Personnage';
import Jeu from './Jeu';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
      
        <ul className="navBar">
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/Page">Création histoire</Link>
          </li>
          <li>
              <Link to="/Personnage">Jouer l'histoire</Link>
          </li>
        </ul>

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route path="/Page">
              <Page />
            </Route>
            <Route path="/Personnage">
                <Personnage />
            </Route>
            <Route path="/Jeu">
                <Jeu />
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

function Menu() {
    return (
      <div>
        <h1>Bienvenue</h1>
      </div>
    );
  }


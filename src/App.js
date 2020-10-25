import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Etusivu from './Views/Etusivu'
import Tyohistoria from './Views/Tyohistoria'
import Yhteystiedot from './Views/Yhteystiedot'


function App() {

  return (
    <div>

      <Router>
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Etusivu/>
          </Route>
          <Route path="/yhteystiedot">
            <Yhteystiedot/>
          </Route>
          <Route path="/tyohistoria">
           <Tyohistoria/>
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
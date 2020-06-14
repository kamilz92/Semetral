import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Pets from '../Pets/Pets';
import Help from '../Help/Help';
import Contact from '../Contact/Contact';
import AdminPanel from '../AdminPanel/AdminNews';
import NewsContextProvider from '../../context/NewsContext';
import PetContextProvider from '../../context/PetsContext';
import PetInfo from '../PetInfo/PetInfo';
import AdminPets from '../AdminPanel/AdminPets';

function Root() {
  return (
    <Router>
      <Switch>
        <PetContextProvider>
          <NewsContextProvider>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/pets/:id" component={PetInfo} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/admin/news" render={() => <Redirect to="/admin" />} />
            <Route exact path="/admin/pets" component={AdminPets} />
          </NewsContextProvider>
        </PetContextProvider>
      </Switch>
    </Router>
  );
}

export default Root;

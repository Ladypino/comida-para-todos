import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import DonationPage from './pages/donationPage';
import AboutUs from './pages/aboutUsPage';
// import DataGridDemo from './components/intranetData/intranetTable';
import IntranetPage from './pages/intranet';
import Login from './components/demo/login'

export const ShowContext = React.createContext(null);

function App() {
  const [formToShow, setFormToShow] = useState('Huertas');
  const [positionScrollForm, setPositionScrollForm] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <LandingPage />
          </ShowContext.Provider>
        </Route>
        <Route path="/Donaciones" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <DonationPage />
          </ShowContext.Provider>
        </Route>
        <Route path="/Nosotros" exact >
          <ShowContext.Provider>
            <AboutUs />
          </ShowContext.Provider>
        </Route>
        <Route path="/Intranet" exact >
          <Login />
        </Route>
        <Route path="/Intranet/Formularios" exact>
          <IntranetPage />
        </Route>
      </Switch>
    </Router >
  );
}
export default App;
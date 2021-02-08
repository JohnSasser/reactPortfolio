import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Homepage from './views/Homepage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ContactMe from './views/ContactMe';
import AboutMe from './views/AboutMe';
import Resume from './views/Resume';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/portfolio">{/* <Portfolio /> */}</Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Router>
    </div>
  );
}

export default App;
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}

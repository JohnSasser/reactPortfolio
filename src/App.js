import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './views/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Navbar />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about-me">{/* <AboutMe /> */}</Route>
          <Route path="/portfolio">{/* <Portfolio /> */}</Route>
          <Route path="/contact">{/* <Contact /> */}</Route>
        </switch>
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

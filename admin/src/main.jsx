import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
//example code:
/*
// Import the necessary components
import { BrowserRouter as Router, Switch, Route, Navigate } from "react-router-dom";
import Header from "./routes/Header/Header";
import Home from "./routes/Home/Home.jsx";
import AboutMe from "./routes/AboutMe/AboutMe.jsx";
import Portfolio from "./routes/Portfolio/Portfolio.jsx";
import Socials from "./routes/Socials/Socials.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/socials" element={<Socials />} />
          <Navigate to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
*/
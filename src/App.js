import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BackDrops from "./components/BackDrops/BackDrops";
import Footer from "./components/Footer";
import Home from "./sitePages/Home";
import JobSeekers from "./sitePages/JobSeekers";
import Employers from "./sitePages/Employers";
import SignUp from "./sitePages/SignUp";
import Contact from "./sitePages/Contact";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/job-seeker" component={JobSeekers} />
        <Route path="/employer" component={Employers} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

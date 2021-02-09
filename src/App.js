import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BackDrops from "./components/BackDrops/BackDrops";
import Footer from "./components/Footer";
import Home from "./sitePages/Home";
import JobSeekers from "./sitePages/JobSeekers";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/job-seeker">
          <JobSeekers />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

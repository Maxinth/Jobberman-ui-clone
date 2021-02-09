import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BackDrops from "./components/BackDrops/BackDrops";
import Footer from "./components/Footer";
import Home from "./sitePages/Home";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

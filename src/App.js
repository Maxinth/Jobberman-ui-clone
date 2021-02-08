import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/Banners/MainBanner";
import BackDrops from "./components/BackDrops/BackDrops";
import FindHelp from "./components/FindHelp/FindHelp";
import JobsView from "./components/JobsOverview/JobsView";
import StandOut from "./components/StandOut/StandOut";
import Connect from "./components/Connect/Connect";
import JobCount from "./components/JobCount";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />
      <MainBanner />
      <FindHelp />
      <JobsView />
      <StandOut />
      <Connect />
      <JobCount />
      <Footer />
    </div>
  );
}

export default App;

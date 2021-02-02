import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/Banners/MainBanner";
import BackDrops from "./components/BackDrops/BackDrops";
import FindHelp from "./components/FindHelp/FindHelp";
import JobsView from "./components/JobsOverview/JobsView";
import StandOut from "./components/StandOut/StandOut";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />
      <MainBanner />
      <FindHelp />
      <JobsView />
      <StandOut />
    </div>
  );
}

export default App;

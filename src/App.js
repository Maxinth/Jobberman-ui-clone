import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/Banners/MainBanner";
import BackDrops from "./components/BackDrops/BackDrops";
// import NavSideBar from "./components/Navbar/NavSideBar/NavSideBar";

function App() {
  return (
    <div className="App">
      <BackDrops />
      <Navbar />

      <MainBanner />
    </div>
  );
}

export default App;
